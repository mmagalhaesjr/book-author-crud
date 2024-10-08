import { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {

  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  console.log(books)
  console.log(authors)
  useEffect(() => {

    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const storedAuthors = JSON.parse(localStorage.getItem('authors')) || [];
    setBooks(storedBooks);
    setAuthors(storedAuthors);
  }, []);


  const booksWithAuthors = books.map(b => {
    const author = authors.find(a => a.id === b.author_id);
    return {
      id: b.id,
      name: b.name,
      pages: b.pages,
      author: {
        id: author ? author.id : null,
        name: author ? author.name : null,
        email: author ? author.email : null,
      },
    };
  });


  return (
    <DataContext.Provider value={{ books, setBooks, authors, setAuthors, booksWithAuthors }}>
      {children}
    </DataContext.Provider>
  );
}

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};