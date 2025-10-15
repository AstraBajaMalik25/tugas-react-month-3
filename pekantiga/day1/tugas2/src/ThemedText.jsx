import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedText() {
  const { theme } = useContext(ThemeContext);

  const style = {
    color: theme === 'light' ? '#333' : '#ddd',
    marginTop: '10px'
  };

  return <p style={style}>Ini teks dengan tema {theme}</p>;
}

export default ThemedText;