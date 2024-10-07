import * as Dialog from "@radix-ui/react-dialog"
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { StyledContainer } from "../BooksPage/StyledBooks";

export default function AuthorsPage() {

    return (

        <StyledContainer>

        <Header />
        <Dialog.Root>

            <Dialog.Trigger>criar</Dialog.Trigger>

            <FormDialog type="author"></FormDialog>

        </Dialog.Root>

    </StyledContainer>

    )

}