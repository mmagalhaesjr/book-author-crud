import { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";

export const DataContext = createContext();

export default function DataContextProvider({ children }){

const [books, setBooks] = useState([]);
const [authors, setAuthors] = useState([]);


useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    // console.log(storedBooks)
    const storedAuthors = JSON.parse(localStorage.getItem('authors')) || [];
    setBooks(storedBooks);
    setAuthors(storedAuthors);
  }, []);


  return (
    <DataContext.Provider value={{ books, authors }}>
      {children}
    </DataContext.Provider>
  );
}


DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};