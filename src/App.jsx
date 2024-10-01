import React from 'react'
import SearchBar from './components/SearchBar'
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/Movie';
import log from './assets/image/log.png'
import MovieDetails from './components/MovieDetails';


i18next.use(initReactI18next).init({
  resources:{
    en:{translation : en},
    es: {translation : es}
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [theme, setTheme] = useState('light');
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    console.log(`Changing language to: ${lng}`);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme)
  }
  return (

    <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} transition duration-500`}>
      <div className="container mx-auto p-5 ">
        
      <header className='flex justify-between space-x-4 item-center py-5'>
       <img src={log} alt="logo" className='w-24 h-16' />
     

        <div className='flex items-center space-x-6  '>
          <button onClick={toggleTheme}
          className={`px-4 py-2 item-center rounded ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition duration-500 `}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
          <button className={`px-4  py-2 font-bold rounded-md ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black' } transition duration-500`} onClick={() => changeLanguage ('en')}>English</button>
          <button className={`px-4 py-2 font-bold rounded ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} transition duration-500`} onClick={() => changeLanguage('es')}>Espanol</button>
        </div>
      </header>
      <div className='mt-10'>
        <Router>
          <Routes>
            <Route path = '/' element= {<SearchBar/>}></Route>
            <Route path ='/movie/:imdbID' element = {<MovieDetails/>}></Route>
          </Routes>
        </Router>
        
      </div>
      
    </div>
    </div>
    
  )
}

export default App
