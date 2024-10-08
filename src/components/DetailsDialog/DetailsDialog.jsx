// import BookForm from "../../components/BookForm/BookForm";
import * as Dialog from "@radix-ui/react-dialog"
import { Content, Overlay } from "./StyledDetailsDialog";
// import AuthorForm from "../AuthorForm/AuthorForm";
import PropTypes from "prop-types";

export default function DetailsDialog({ details, type }) {

    return (

        <Dialog.Portal>
            <Overlay>
                <Content aria-describedby="">
                    {type === "book" && (
                        <>
                            <Dialog.Title>
                                <h1>Nome do Livro: <span>{details.name}</span></h1>

                                <h1>Número de páginas: <span>{details.pages ? details.pages : "Não informado"}</span> </h1>

                                <h1>Autor: <span>{details.author.name}</span></h1>

                                <h1>Email do autor: <span> {details.author.email ? details.author.email : "Não informado"}</span></h1>
                                
                            </Dialog.Title>
                        </>
                    )}

                    {type === "author" && (
                        <Dialog.Title>
                            <h1>Autor: <span>{details.name}</span> </h1>
                            <h1>Email: <span>{details.email ? details.email : "Não informado"}</span> </h1>
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