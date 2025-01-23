import React, { useState } from 'react';
import { LogIn, BookOpen, ClipboardList, LogOut, User } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard userEmail={userEmail} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;