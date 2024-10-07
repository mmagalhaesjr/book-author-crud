import StyledButton from "../StyledButton";
import StyledForm from "../StyledForm"
import { StyledInput } from "../StyledInput"
import { useForm } from "react-hook-form"



export default function AuthorForm() {

    const { register, handleSubmit, watch } = useForm();

    const novoAutor = watch('novoAutor');
    const isFormValid = novoAutor;


    function createAuthor(data) {
        console.log({
            novoAutor: data.novoAutor,
            email: data.email,
        });
    }


    return (
        <StyledForm onSubmit={handleSubmit(createAuthor)}>

            <StyledInput
                type="text"
                id="novoAutor"

                placeholder="Nome do Autor"
                {...register('novoAutor', { required: 'Nome do autor é obrigatório se estiver criando um novo' })}
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