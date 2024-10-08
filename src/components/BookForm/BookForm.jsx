import StyledForm from "../StyledForm";
import { StyledInput, StyledSelect } from "../StyledInput";
import StyledButton from "../StyledButton";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import PropTypes from "prop-types";

const stringPattern = (str) => {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "")
        .toLowerCase();
};

export default function BookForm({ setOpen }) {
    const { register, handleSubmit, watch } = useForm();
    const author = watch('author');
    const booksName = watch('booksName');
    const newAuthor = watch('newAuthor');
    const { books, authors } = useContext(DataContext);

    let isFormValid = booksName && author;
    if (author === "new") {
        isFormValid = booksName && author && newAuthor;
    }

    function createBoook(data) {
  
        const bookId = books[books.length - 1]?.id + 1  || 1

        const normalizedBooksName = stringPattern(data.booksName);


        const duplicatedBook = books.find(b => stringPattern(b.name) === normalizedBooksName);
        if (duplicatedBook) {
            return alert('Livro já cadastrado');
        }

        if (data.author === "new") {
            const normalizedNewAuthor = stringPattern(data.newAuthor);
            const duplicatedAuthor = authors.find(a => stringPattern(a.name) === normalizedNewAuthor);
            if (duplicatedAuthor) {
                return alert('Autor já cadastrado');
            } else {

                const authorId = authors[authors.length - 1]?.id + 1 || 1
                const newBook = {
                    id: bookId,
                    name: data.booksName,
                    author_id: authorId,
                    pages: data.numberPages
                };
                books.push(newBook);
                localStorage.setItem('books', JSON.stringify(books));

                authors.push({
                    id: authorId,
                    name: data.newAuthor,
                    email: data.email
                });
                localStorage.setItem('authors', JSON.stringify(authors));
                setOpen(false);
                window.location.reload();
                return;
            }
        }

        const newBook = {
            id: bookId,
            name: data.booksName,
            author_id: Number(data.author),
            pages: data.numberPages
        };
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        setOpen(false);
        window.location.reload();
    }

    return (
        <StyledForm onSubmit={handleSubmit(createBoook)}>
            <StyledInput
                type="text"
                id="booksName"
                placeholder="Nome do livro"
                required
                {...register('booksName')}
            />

            <StyledSelect id="author" {...register('author')}>
                <option value="">Selecione um author</option>
                {authors.map((a) => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                ))}
                <option value="new">Criar novo author</option>
            </StyledSelect>

            {author === 'new' && (
                <>
                    <StyledInput
                        type="text"
                        id="newAuthor"
                        placeholder="Nome do novo author"
                        {...register('newAuthor')}
                    />
                    <StyledInput
                        type="email"
                        id="email"
                        placeholder="Email do author (opcional)"
                        {...register('email')}
                    />
                </>
            )}

            <StyledInput
                type="number"
                id="numberPage"
                placeholder="Número de páginas (opcional)"
                {...register('numberPages')}
            />

            <StyledButton disabled={!isFormValid} type="submit">Criar</StyledButton>
        </StyledForm>
    );
}

BookForm.propTypes = {
    setOpen: PropTypes.func.isRequired,
};
