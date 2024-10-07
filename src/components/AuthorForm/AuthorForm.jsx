import StyledButton from "../StyledButton";
import StyledForm from "../StyledForm"
import { StyledInput } from "../StyledInput"
import { useForm } from "react-hook-form"

export default function AuthorForm({ setOpen }) {

    const { register, handleSubmit, watch } = useForm();
    const newAuthor = watch('newAuthor');
    const isFormValid = newAuthor;


    function createAuthor(data) {
        const duplicatedAuthor = authors.find(a => a.name === data.newAuthor || author.email === data.email);
        if (duplicatedAuthor) {
            return alert('Autor já cadastrado')
        }

        authors.push({ id: authors.length + 1, name: data.newAuthor, email: data.email });
        localStorage.setItem('authors', JSON.stringify(authors));
        setOpen(false)

    }


    return (
        <StyledForm onSubmit={handleSubmit(createAuthor)}>

            <StyledInput
                type="text"
                id="newAuthor"

                placeholder="Nome do Autor"
                {...register('newAuthor', { required: 'Nome do autor é obrigatório se estiver criando um novo' })}
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
    setOpen: PropTypes.bool.isRequired,
};