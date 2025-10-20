import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { NotificationProvider } from './NotificationContext';
import Header from './Header';

function App() {
  return (
    <LanguageProvider>
      <NotificationProvider>
        <h2>Tugas 3: Multiple Contexts</h2>
        <Header />
      </NotificationProvider>
    </LanguageProvider>
  );
}

export default App;