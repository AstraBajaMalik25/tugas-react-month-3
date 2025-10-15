import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#ddd' : '#555',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    marginBottom: '10px',
  };

  return (
    <button style={style} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemedButton;