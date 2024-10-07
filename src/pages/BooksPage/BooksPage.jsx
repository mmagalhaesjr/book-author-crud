import * as Dialog from "@radix-ui/react-dialog"
import { StyledContainer, StyledTabela } from "./StyledBooks";
import FormDialog from "../../components/FormDialog/FormDialog";
import Header from "../../components/Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";

export default function BooksPage() {
    const { books } = useContext(DataContext);
    const [open, setOpen] = useState(false)

    return (

        <StyledContainer>

            <Header />

            <section>

                <StyledTabela>
                    {books.map((b) => (
                        <div id="nameBook" key={b.id}>
                                <p>{b.name}</p>
                               
                                
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