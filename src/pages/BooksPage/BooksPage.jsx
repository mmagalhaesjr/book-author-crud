import * as Dialog from "@radix-ui/react-dialog"
import { StyledContainer, StyledTabela } from "./StyledBooks";
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";

import { FaRegTrashAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";


export default function BooksPage() {
    const { booksWithAuthors } = useContext(DataContext);
    const [open, setOpen] = useState(false)

    return (

        <StyledContainer>

            <Header />

            <section>

                <StyledTabela>
                    {booksWithAuthors.map((b) => (
                        <div id="container" key={b.id}>


                            <p>Livro: <span>{b.name}</span></p>

                            <div id="buttonDetails">Detalhes <TbListDetails /></div>
                            <div id="buttonDelete">Deletar  <FaRegTrashAlt /> </div>

                        </div>
                    ))}

                </StyledTabela>


                <Dialog.Root open={open} onOpenChange={setOpen}>

                    <Dialog.Trigger>
                        <button>
                            CRIAR
                        </button>
                    </Dialog.Trigger>

                    <FormDialog type="book" setOpen={setOpen}></FormDialog>

                </Dialog.Root>

            </section>


        </StyledContainer>


    )

}