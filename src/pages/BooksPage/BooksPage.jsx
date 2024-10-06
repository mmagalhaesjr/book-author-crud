import * as Dialog from "@radix-ui/react-dialog"
import { Container} from "./StyledBooks";
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";

export default function BooksPage() {

    return (

            <Container>

                <Header />
                <Dialog.Root>

                    <Dialog.Trigger>criar</Dialog.Trigger>

                    <FormDialog type="book"></FormDialog>

                </Dialog.Root>

            </Container>


    )

}