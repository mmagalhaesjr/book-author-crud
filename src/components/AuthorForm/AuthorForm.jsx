import PropTypes from "prop-types";
import StyledButton from "../StyledButton";
import StyledForm from "../StyledForm"
import { StyledInput } from "../StyledInput"
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export default function AuthorForm({ setOpen }) {

    const { register, handleSubmit, watch } = useForm();
    const name = watch('name');

    const { authors } = useContext(DataContext);
    const isFormValid = name;

    function createAuthor(data) {
        const duplicatedAuthor = authors.find(a => a.name === data.name);
        
        if (duplicatedAuthor) {return alert('Autor já cadastrado')}

        const authorId = authors[authors.length - 1]?.id + 1 || 1
        authors.push({ id: authorId, name: data.name, email: data.email });
        localStorage.setItem('authors', JSON.stringify(authors));
        setOpen(false)

    }


    return (
        <StyledForm onSubmit={handleSubmit(createAuthor)}>

            <StyledInput
                type="text"
                id="name"

                placeholder="Nome do Autor"
                {...register('name')}
            />

            <StyledInput
                type="email"
                id="email"
                placeholder="Email do autor (opcional)"
                {...register('email')}
            />

            <StyledButton disabled={!isFormValid} type="submit">Criar</StyledButton>

        </StyledForm >

    );

}

AuthorForm.propTypes = {
    setOpen: PropTypes.func.isRequired,
};