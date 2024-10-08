import { stringPattern } from "../constants/stringPattern";
import createAuthor from "./createAuthor";

export default function createBook(data, books, authors, setBooks) {

    const bookId = books[books.length - 1]?.id + 1 || 1

    const normalizedBooksName = stringPattern(data.booksName);

    const duplicatedBook = books.find(b => stringPattern(b.name) === normalizedBooksName);

    if (duplicatedBook) {
        alert('Livro já cadastrado');
        return false
    }


    if (data.author === "new") {
        const authorId = authors[authors.length - 1]?.id + 1 || 1

        const isAuthorCreated = createAuthor(data.newAuthor, authorId, data.email, authors)

        if (isAuthorCreated === false) return false

        const newBook = {
            id: bookId,
            name: data.booksName,
            author_id: authorId,
            pages: data.numberPages
        };

        const newBooksList = [...books, newBook];

        return newBooksList

    }


    const newBook = {
        id: bookId,
        name: data.booksName,
        author_id: Number(data.author),
        pages: data.numberPages
    };

    const newBooksList = [...books, newBook];

    return newBooksList

}
