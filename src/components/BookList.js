
import React, { useState, useEffect } from 'react';
import "../../src/index.css"; 
import api from '../api/api'; 

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list"> 
      <h2>Lista de Libros</h2>
      <div className="book-cards-container"> 
        {books.map((book) => (
          <div key={book.id} className="book-card"> 
            <p>{book.description}</p>
            <p>Propietario: {book.owner}</p>
            <div className="book-actions"> 
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;