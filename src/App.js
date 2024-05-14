import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import BookList from './components/BookList';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <div className="app-container"> 
        <nav className="app-nav"> 
          <ul>
            <li>
              <a href="/" className="nav-link">Inicio</a> 
            </li>
            <li>
              <a href="/login" className="nav-link">Login</a>
            </li>
            <li>
              <a href="/books" className="nav-link">Mis Libros</a>
            </li>
          </ul>
        </nav>

        <div className="app-content"> 
          <h1 className="app-title">Gestión de Libros</h1> 
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<BookList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;