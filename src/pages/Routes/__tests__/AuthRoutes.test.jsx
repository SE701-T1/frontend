import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthRoutes from '../AuthRoutes';
import { AuthContext } from '../../../context/authContext';

function createMockContext(authStatus) {
  return { authenticated: authStatus };
}

describe('AuthRoutes', () => {
  it('should render children when logged in.', async () => {
    render(
      <AuthContext.Provider value={createMockContext(true)}>
        <AuthRoutes>
          <p>Hello</p>
        </AuthRoutes>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
