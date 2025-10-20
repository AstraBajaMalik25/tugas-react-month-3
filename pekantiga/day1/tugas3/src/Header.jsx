import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { NotificationContext } from './NotificationContext';

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      <h3>{language === 'id' ? 'Header Aplikasi' : 'App Header'}</h3>
      <p>{language === 'id' ? 'Jumlah Notifikasi' : 'Notifications'}: {notifications.length}</p>
      <button onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}>
        {language === 'id' ? 'Ganti ke English' : 'Switch to Bahasa'}
      </button>
    </div>
  );
}

export default Header;