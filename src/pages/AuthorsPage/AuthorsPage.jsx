import * as Dialog from "@radix-ui/react-dialog"
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { StyledContainer } from "../BooksPage/StyledBooks";
import { useState } from "react";

export default function AuthorsPage() {
    const [open, setOpen] = useState(false);
    return (

        <StyledContainer>

        <Header />
        <Dialog.Root open={open} onOpenChange={setOpen}>

            <Dialog.Trigger>criar</Dialog.Trigger>

            <FormDialog type="author" setOpen={setOpen}></FormDialog>

        </Dialog.Root>

    </StyledContainer>

    )

}