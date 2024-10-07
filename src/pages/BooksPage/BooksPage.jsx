import * as Dialog from "@radix-ui/react-dialog"
import { Container } from "./StyledBooks";
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export default function BooksPage() {
    const { books } = useContext(DataContext);

console.log(books)
    return (

        <Container>

            <Header />


            <Dialog.Root>

                <Dialog.Trigger>criar</Dialog.Trigger>

                <FormDialog type="book"></FormDialog>

            </Dialog.Root>
            {books.map((b) => (
                <p>{b.name}</p>))}
        </Container>


    )

}