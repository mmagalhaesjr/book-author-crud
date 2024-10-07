import BookForm from "../../components/BookForm/BookForm";
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./StyledFormDialog";
import AuthorForm from "../AuthorForm/AuthorForm";
import PropTypes from "prop-types";

export default function FormDialog({ type, setOpen }) {

    return (

        <Dialog.Portal>
            <Overlay>
                <Content aria-describedby="">
                    {type === "book" && (
                        <>
                            <Dialog.Title>
                                <h1>Cadastrar Livro</h1></Dialog.Title>
                            <BookForm setOpen={setOpen}/>
                        </>
                    )}

                    {type === "author" && (
                        <>
                            <Dialog.Title><h1>Cadastrar Autor</h1></Dialog.Title>
                            <AuthorForm setOpen={setOpen}/>
                        </>
                    )}

                </Content>
            </Overlay>

        </Dialog.Portal>


    )

}

FormDialog.propTypes = {
  type: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
};