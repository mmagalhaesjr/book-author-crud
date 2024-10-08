import * as Dialog from "@radix-ui/react-dialog";
import { StyledContainer, StyledTabela } from "./StyledBooks";
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import TableRow from "../../components/TableRow/TableRow";

export default function BooksPage() {
    const { booksWithAuthors } = useContext(DataContext);
    const [open, setOpen] = useState(false);


    return (
        <StyledContainer>
            <Header />
            <section>
                {booksWithAuthors.length === 0 ? (
                    <p>Não existe livros na biblioteca</p>
                ) : (
                    <StyledTabela>
                        <h1>Livros</h1>
                        {booksWithAuthors.map((book) => (
                            <TableRow key={book.id} data={book} setOpen={setOpen} type="book" />
                        ))}
                    </StyledTabela>
                )}

                <Dialog.Root open={open} onOpenChange={setOpen}>

                    <Dialog.Trigger >
                        <p id="bottonCreate">CRIAR</p>
                    </Dialog.Trigger>

                    <FormDialog type="book" setOpen={setOpen}></FormDialog>
                </Dialog.Root>
            </section>
        </StyledContainer>
    );
}
