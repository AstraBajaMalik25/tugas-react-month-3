import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { user, login, logout, updateProfile } = useContext(UserContext);

  return (
    <div>
      {user.isLoggedIn ? (
        <>
          <p>Halo, {user.name} ({user.email})</p>
          <button onClick={() => updateProfile('Updated Name', 'updated@example.com')}>
            Update Profile
          </button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('Alice', 'alice@example.com')}>
          Login sebagai Alice
        </button>
      )}
    </div>
  );
}

export default UserProfile;
