import React, { useEffect, useMemo, useState } from 'react';
import createPersistedState from 'use-persisted-state';

const useJwtState = createPersistedState('jwt');
export const AuthContext = React.createContext({});

/**
 * The main application is wrapped around this {@link AuthContextProvider} so that other modules of
 * the application are able to access properties related to User authentication e.g. current JWT,
 * authentication status and helper function to log the user out.
 *
 * A library called 'use-persisted-state' is being used to store the token in the local storage of
 * the browser.
 */
export function AuthContextProvider({ children }) {
  const [jwt, setJwt] = useJwtState();
  const [authenticated, setAuthenticated] = useState(false);

  // Clears the JWT, which triggers the useEffect() below to set authenticated to false.
  function logout() {
    setJwt('');
  }

  useEffect(async () => {
    if (jwt === '') {
      setAuthenticated(false);
      return;
    }

    // Triggering a backend call to verify the integrity of the current JWT.
    const response = await fetch(`${process.env.API_HOST}:${process.env.API_PORT}/login`, {
      method: 'GET',
      headers: new Headers({
        Authorization: jwt,
      }),
    });

    if (response.ok) {
      setAuthenticated(true);
      return;
    }

    /*
    If the server determines that the currently stored JWT is invalid, then we are resetting the
    current state - there's no point in persisting the invalid token.
    */
    setJwt('');
  }, [jwt]);

  const context = useMemo(() => ({ jwt, setJwt, authenticated, logout }), [jwt, authenticated]);
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
