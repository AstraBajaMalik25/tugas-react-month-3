import React from 'react';
import ThemeProvider from './ThemeProvider'; // Dari contoh sebelumnya
import UserProvider from './UserProvider';
import ThemedParagraph from './ThemedParagraph'; // Dari contoh sebelumnya
import UserInfoDisplay from './UserInfoDisplay';
import ThemedButton from './ThemedButton'; // Consumer

function App() {
  return ( 
    <ThemeProvider> {/* Provider pertama */}
      <UserProvider> {/* Provider kedua */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Aplikasi dengan Multiple Contexts</h2>
          <ThemedButton />
          <ThemedParagraph />
          <hr />
          <UserInfoDisplay />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App; 