import * as Dialog from "@radix-ui/react-dialog";
// import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { StyledContainer, StyledTabela } from "./StyledBooks";
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import DetailsDialog from "../../components/DetailsDialog/DetailsDialog";

import { FaRegTrashAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

export default function BooksPage() {
    const { booksWithAuthors } = useContext(DataContext);
    const [open, setOpen] = useState(false);


    return (
        <StyledContainer>
            <Header />
            
            <h1 id="titulo">Livros</h1>

            <section>
                {booksWithAuthors.length === 0 ? (
                    <p>Não existe livros na biblioteca</p>
                ) : (
                    <StyledTabela>
                        {booksWithAuthors.map((b) => (
                            <div id="container" key={b.id}>
                                <p>
                                    Livro: <span>{b.name}</span>
                                </p>

                             
                                    <Dialog.Root>
                                        <Dialog.Trigger>

                                            <div id="buttonDetails">
                                                Detalhes <TbListDetails />
                                            </div>
                                        </Dialog.Trigger>
                                        <DetailsDialog details={b} type="book" setOpen={setOpen}></DetailsDialog>
                                    </Dialog.Root>



                                    <div id="buttonDelete">
                                        Deletar <FaRegTrashAlt />
                                    </div>
                              

                            </div>
                        ))}
                    </StyledTabela>
                )}

                <Dialog.Root open={open} onOpenChange={setOpen}>

                    <Dialog.Trigger>
                        <button id="bottonCreate">CRIAR</button>
                    </Dialog.Trigger>

                    <FormDialog type="book" setOpen={setOpen}></FormDialog>
                </Dialog.Root>
            </section>
        </StyledContainer>
    );
}
