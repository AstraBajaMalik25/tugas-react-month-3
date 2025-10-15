import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserInfoDisplay() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <p>Selamat datang, {user.name}!</p>
      {user.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('Alice')}>Login sebagai Alice</button>
      )}
    </div>
  );
}
export default UserInfoDisplay;