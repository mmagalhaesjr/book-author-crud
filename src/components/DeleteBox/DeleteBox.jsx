
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";
import { Content, Overlay } from "./StyledDeleteBox";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export default function DeleteBox({ id, type }) {

    const { books, authors, setBooks, setAuthors } = useContext(DataContext);

    function handleDelete(id) {

        if (type === "book") {
            const newBooksList = books.filter(book => book.id !== id);
            localStorage.setItem('books', JSON.stringify(newBooksList));
            setBooks(newBooksList)
        } else {
            const newAuthorsList = authors.filter(author => author.id !== id);
            const newBooksList = books.filter(book => book.author_id !== id);
            localStorage.setItem('authors', JSON.stringify(newAuthorsList));
            localStorage.setItem('books', JSON.stringify(newBooksList));
            setBooks(newBooksList)
            setAuthors(newAuthorsList)
        }

    }
    return (

        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <div id="buttonDelete">
                    Deletar <FaRegTrashAlt />
                </div>
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <Overlay />
                <Content>
                    <div id="boxText">
                        <AlertDialog.Title>
                            Você tem certeza que deseja apagar este {type === "book" ? "livro" : "autor"}?
                        </AlertDialog.Title>
                        <AlertDialog.Description>
                            Esta ação não poderá ser desfeita.
                            <br></br>
                            
                            {type === "author" && "Todos os livros deste autor também serão revomidos."}
                        </AlertDialog.Description>
                    </div>


                    <div id="boxButton">
                        <AlertDialog.Cancel asChild>
                            <button>Cancelar</button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <button onClick={() => handleDelete(id)}>Sim, deletar</button>
                        </AlertDialog.Action>
                    </div>


                </Content>
            </AlertDialog.Portal>

        </AlertDialog.Root>



    )

}

DeleteBox.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
