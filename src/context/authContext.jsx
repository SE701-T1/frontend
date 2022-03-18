import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext({});

/**
 * The main application is wrapped around this {@link AuthContextProvider} so that other modules of
 * the application are able to access properties related to User authentication e.g. current JWT,
 * authentication status and helper function to log the user out.
 *
 * A library called 'use-persisted-state' is being used to store the token in the local storage of
 * the browser.
 */
export function AuthContextProvider({ children, socket }) {
  const [jwt, setJwt] = useJwtState('');
  const [authenticated, setAuthenticated] = useState(false);

  // Clears the JWT, which triggers the useEffect() below to set authenticated to false.
  function logout() {
    setJwt('');
    socket.disconnect();
  }

  useEffect(async () => {
    if (jwt === '') {
      setAuthenticated(false);
      axios.defaults.headers.common = {
        Authorization: '',
      };
      return;
    }

    // Triggering a backend call to verify the integrity of the current JWT.
    try {
      await axios.get(`${process.env.API_HOST}:${process.env.API_PORT}/verify`, {
        headers: {
          Authorization: jwt,
        },
      });

      setAuthenticated(true);
      axios.defaults.headers.common = {
        Authorization: jwt,
      };

      // Socket connection is being established here.
      socket.connect(jwt);

    } catch (error) {
      setJwt('');
    }
  }, [jwt]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const context = { jwt, authenticated, setJwt, logout };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
