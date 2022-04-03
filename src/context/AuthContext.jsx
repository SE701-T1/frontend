import React, { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import createPersistedState from 'use-persisted-state';
import { SocketContext } from '../api/sockets/Sockets';

const useJWTState = createPersistedState('jwt');
export const AuthContext = createContext({});

/**
 * The main application is wrapped around this {@link AuthContextProvider} so that other modules of
 * the application are able to access properties related to User authentication e.g. current JWT,
 * authentication status and helper function to log the user out.
 *
 * A library called 'use-persisted-state' is being used to store the token in the local storage of
 * the browser.
 */
export function AuthContextProvider({ children }) {
  const socket = useContext(SocketContext);
  const [jwt, setJwt] = useJWTState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [tokenId, setTokenId] = useState('');

  // Clears the JWT, which triggers the useEffect() below to set authenticated to false.
  function logout() {
    setJwt('');
  }

  useEffect(() => {
    if (tokenId === '' || authenticated === true) {
      return;
    }
    axios.defaults.headers.common = {};
    axios
      .get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/users/login`, {
        headers: {
          id_token: tokenId,
        },
      })
      .then(({ data }) => {
        setTokenId('');
        setJwt(data);
      })
      .catch(() => {
        setTokenId('');
        setJwt('');
      });
  }, [tokenId]);

  useEffect(() => {
    const startup = async () => {
      if (jwt === '') {
        setAuthenticated(false);
        axios.defaults.headers.common = {};
        socket.disconnect();
        return;
      }

      // Triggering a backend call to verify the integrity of the current JWT.
      console.log(process.env.REACT_APP_BACKEND_ENDPOINT)
      const baseUrl = 'http://localhost:8080'
      try {
        
        await axios.get(`${baseUrl}/api/validate`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        setAuthenticated(true);
        axios.defaults.headers.common = {
          Authorization: `Bearer ${jwt}`,
        };

        // Socket connection is being established here.
        socket.connect(jwt);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setJwt('');
      }
    };
    startup();
    return () => {
      socket.disconnect();
    };
  }, [jwt]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = { jwt, authenticated, setJwt, setTokenId, logout };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
