/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header/Header';
import { useState } from 'react';
import { PlayerProvider } from './context/PlayContext';
import DropdownMenu from './components/DropDown/DropDownMenu/DropDownMenu';

function App() {
  return (
    <>
      <PlayerProvider>
        <BrowserRouter>
          <header>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path='Copy-SoundCloud/' element={<MainPage />} />
              <Route path='Copy-SoundCloud/Feed' element={<DropdownMenu />} />
            </Routes>
          </main>
          <footer></footer>
        </BrowserRouter>
      </PlayerProvider>
    </>
  );
}

export default App;
