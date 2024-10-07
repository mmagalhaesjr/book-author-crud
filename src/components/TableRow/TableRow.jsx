import * as Dialog from "@radix-ui/react-dialog";
import { TbListDetails } from "react-icons/tb";
import DetailsDialog from "../../components/DetailsDialog/DetailsDialog";
import DeleteBox from "../DeleteBox/DeleteBox";
import { useState } from "react";
import { StyledRow } from "./styled";

export default function TableRow({ data, setOpen, type }) {
console.log(data)
    return (
        <StyledRow key={data.id}>
            <p>
                <span>{data.name}</span>
            </p>


            <Dialog.Root>
                <Dialog.Trigger>

                    <div id="buttonDetails">
                        Detalhes <TbListDetails />
                    </div>
                </Dialog.Trigger>
                <DetailsDialog details={data} type={type} setOpen={setOpen}></DetailsDialog>
            </Dialog.Root>

            <DeleteBox type={type} id={data.id}></DeleteBox>


        </StyledRow>
    )
}

