import React from 'react'
import SearchBar from './components/SearchBar'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

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
    <div className={`app-container ${theme}`}>
      <header>
        <h1>Welcome to Priscy Movie Datbase </h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>
      <SearchBar/>
    </div>
  )
}

export default App
