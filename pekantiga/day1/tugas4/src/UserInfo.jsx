import React from 'react';
import { useUserContext } from './useUserContext';

function UserInfo() {
  const { user, login, logout } = useUserContext();

  return (
    <div>
      {user.isLoggedIn ? (
        <>
          <p>Welcome, {user.name} ({user.email})</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('Bob', 'bob@example.com')}>Login as Bob</button>
      )}
    </div>
  );
}

export default UserInfo;
