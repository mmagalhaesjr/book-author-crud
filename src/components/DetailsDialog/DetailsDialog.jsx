import BookForm from "../../components/BookForm/BookForm";
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./StyledDetailsDialog";
import AuthorForm from "../AuthorForm/AuthorForm";
import PropTypes from "prop-types";

export default function DetailsDialog({ details, type, setOpen }) {

    return (

        <Dialog.Portal>
            <Overlay>
                <Content aria-describedby="">
                    {type === "book" && (
                        <>
                            <Dialog.Title>
                                <h1>Nome do Livro: {details.name}</h1>
                                <h1>Número de páginas: {details.pages ? details.pages : "Não informado"}</h1>
                                <h1>Autor: {details.author.name}</h1>
                                <h1>Email do autor: {details.author.email ? details.author.email : "Não informado"}</h1>
                            </Dialog.Title>
                        </>
                    )}

                    {type === "author" && (
                        <Dialog.Title>
                            <h1>Autor: {details.name} {details.id}</h1>
                            <h1>Email: {details.email ? details.email : "Não informado"}</h1>
                        </Dialog.Title>
                    )}

                </Content>
            </Overlay>

        </Dialog.Portal>


    )

}

DetailsDialog.propTypes = {

    details: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    setOpen: PropTypes.func.isRequired,
};