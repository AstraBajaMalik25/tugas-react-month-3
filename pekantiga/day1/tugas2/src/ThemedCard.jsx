import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedCard() {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    marginTop: '10px',
    borderRadius: '10px',
  };

  return <div style={style}>Ini adalah card bertema {theme}</div>;
}

export default ThemedCard;