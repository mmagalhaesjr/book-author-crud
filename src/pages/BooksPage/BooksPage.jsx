import * as Dialog from "@radix-ui/react-dialog"
import { Container } from "./StyledBooks";
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";

export default function BooksPage() {
    const { books } = useContext(DataContext);
    const [open, setOpen] = useState(false)

    return (

        <Container>

            <Header />


            <Dialog.Root open={open} onOpenChange={setOpen}>

                <Dialog.Trigger>criar</Dialog.Trigger>

                <FormDialog type="book" setOpen={setOpen}></FormDialog>

            </Dialog.Root>
            {books.map((b) => (
                <p>{b.name}</p>))}
        </Container>


    )

}