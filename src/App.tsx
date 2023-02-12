import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import HomeView from './views/home/home';
import LoginView from './views/login/login';

function App() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const access_token = hash.substring(1).split("&")[0].split("=")[1];
      localStorage.setItem("access_token", access_token)
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>

  );
}

export default App;
