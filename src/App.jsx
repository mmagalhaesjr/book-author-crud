
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BooksPage from './pages/BooksPage/BooksPage';
import AuthorsPage from './pages/AuthorsPage/AuthorsPage';

export default  function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path="/livros"  element={<BooksPage/>} />
                <Route path="/autores"  element={<AuthorsPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

