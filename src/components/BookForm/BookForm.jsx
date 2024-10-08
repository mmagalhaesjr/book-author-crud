import StyledForm from "../StyledForm";
import { StyledInput, StyledSelect } from "../StyledInput";
import StyledButton from "../StyledButton";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import PropTypes from "prop-types";
import createBook from "../../functions/createBook";


export default function BookForm({ setOpen }) {
    const { register, handleSubmit, watch } = useForm();
    const author = watch('author');
    const booksName = watch('booksName');
    const newAuthor = watch('newAuthor');
    const { books, authors, setBooks } = useContext(DataContext);

    let isFormValid = booksName && author;
    if (author === "new") {
        isFormValid = booksName && author && newAuthor;
    }

    function handleCreateBook(data) {
        const newBooksListCreated = createBook(data, books, authors)

        if (newBooksListCreated) {

            setOpen(false);

            localStorage.setItem('books', JSON.stringify(newBooksListCreated));
            setBooks(newBooksListCreated)

        }
    }


    return (
        <StyledForm onSubmit={handleSubmit(handleCreateBook)}>
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
