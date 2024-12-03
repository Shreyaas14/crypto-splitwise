import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import { PrivyProvider } from '@privy-io/react-auth';

const App = () => {
  const privyID = import.meta.env.VITE_PRIVY_APP_ID;
  console.log(privyID);
  return (
    <PrivyProvider
      appId={privyID}
      config={{
        loginMethods: ['email', 'google'],
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <Router>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </PrivyProvider>
  );
};

export default App;
