import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';
import ThemedCard from './ThemedCard';
import ThemedText from './ThemedText';

function App() {
  return (
    <ThemeProvider>
      <h2>Theme Toggle</h2>
      <ThemedButton />
      <ThemedCard />
      <ThemedText />
    </ThemeProvider>
  );
}

export default App;