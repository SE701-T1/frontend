import React, { useEffect, useMemo, useState } from 'react';
import createPersistedState from 'use-persisted-state';

const useJwtState = createPersistedState('jwt');
export const AuthContext = React.createContext({});

export function AuthContextProvider({ children }) {
  const [jwt, setJwt] = useJwtState();
  const [authenticated, setAuthenticated] = useState(false);

  function logout() {
    setJwt('');
  }

  useEffect(async () => {
    if (jwt === '') {
      setAuthenticated(false);
      return;
    }

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

  const context = useMemo(() => ({ setJwt, authenticated, logout }), [authenticated]);
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
