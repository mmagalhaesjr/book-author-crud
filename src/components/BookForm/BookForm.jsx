import StyledForm from "../StyledForm"
import { StyledInput, StyledSelect } from "../StyledInput"
import StyledButton from "../StyledButton"
import { useForm } from "react-hook-form"

export default function BookForm() {
    const autores = ['Autor 1', 'Autor 2', 'Autor 3'];
    const { register, handleSubmit, watch } = useForm();
    const autor = watch('autor');
    const nomeLivro = watch('nomeLivro');
    const novoAutor = watch('novoAutor');
    let isFormValid = nomeLivro && autor

    if (autor === "novo") {
        isFormValid = nomeLivro && autor && novoAutor;
    } 


    function createBoook(data) {
        console.log({
            nomeLivro: data.nomeLivro,
            autor: data.autor,
            novoAutor: data.novoAutor,
            email: data.email,
            numeroPaginas: data.numeroPaginas,
        });
    }

    return (

        <StyledForm onSubmit={handleSubmit(createBoook)}>

            <StyledInput
                type="text"
                id="nomeLivro"
                placeholder="Nome do livro"
                required
                {...register('nomeLivro')}

            />

            <StyledSelect
                id="autor"
                {...register('autor')}
            >
                <option value="">Selecione um autor</option>
                {autores.map((a, index) => (
                    <option key={index} value={a}>{a}</option>
                ))}
                <option value="novo">Criar novo autor</option>
            </StyledSelect>

            {autor === 'novo' && (
                <>
                    <StyledInput
                        type="text"
                        id="novoAutor"
                        placeholder="Nome do novo autor"
                        {...register('novoAutor')}
                    />
                    <StyledInput
                        type="email"
                        id="email"
                        placeholder="Email do autor (opcional)"
                        {...register('email')}
                    />
                </>

            )}

            <StyledInput
                type="number"
                id="numeroPaginas"
                placeholder="Número de páginas (opcional)"
                {...register('numeroPaginas')}
            />


            <StyledButton disabled={!isFormValid} type="submit">Criar</StyledButton>
        </StyledForm>

    );

}