import BookForm from "../../components/BookForm/BookForm";
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./StyledFormDialog";
import AuthorForm from "../AuthorForm/AuthorForm";
import PropTypes from "prop-types";

export default function FormDialog({ type }) {

    return (

        <Dialog.Portal>
            <Overlay>
                <Content>
                    {type === "book" && (
                        <>
                            <Dialog.Title>
                                <h1>Cadastrar Livro</h1></Dialog.Title>
                            <BookForm />
                        </>
                    )}

                    {type === "author" && (
                        <>
                            <Dialog.Title><h1>Cadastrar Autor</h1></Dialog.Title>
                            <AuthorForm />
                        </>
                    )}

                </Content>
            </Overlay>

        </Dialog.Portal>


    )

}

FormDialog.propTypes = {
  type: PropTypes.string.isRequired, // Exemplo de validação obrigatória
};