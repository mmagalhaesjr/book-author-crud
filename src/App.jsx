import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage/BooksPage';
import AuthorsPage from './pages/AuthorsPage/AuthorsPage';
import DataContextProvider from './contexts/DataContext';
import InfoPage from './pages/InfoPage/InfoPage';

export default function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/livros" element={<BooksPage />} />
          <Route path="/autores" element={<AuthorsPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>

      </DataContextProvider>

    </BrowserRouter>
  );
}

