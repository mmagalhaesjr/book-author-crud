import * as Dialog from "@radix-ui/react-dialog"
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { StyledContainer } from "../BooksPage/StyledBooks";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { StyledTabela } from "./styled";
import TableRow from "../../components/TableRow/TableRow";

export default function AuthorsPage() {
    const [open, setOpen] = useState(false);
    
    const { authors } = useContext(DataContext);
 
    return (

        <StyledContainer>

        <Header />

        <section>
                {authors.length === 0 ? (
                    <p>Não existe livros na biblioteca</p>
                ) : (
                    <StyledTabela>
                        <h1>Autores</h1>
                        {authors.map((author) => (
                            <TableRow key={author.id} data={author} setOpen={setOpen} type="author"/>
                        ))}
                    </StyledTabela>
                )}

                <Dialog.Root open={open} onOpenChange={setOpen}>

                    <Dialog.Trigger>
                        <button id="bottonCreate">CRIAR</button>
                    </Dialog.Trigger>

                    <FormDialog type="author" setOpen={setOpen}></FormDialog>
                </Dialog.Root>
            </section>


    </StyledContainer>

    )

}