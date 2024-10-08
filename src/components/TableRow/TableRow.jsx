import * as Dialog from "@radix-ui/react-dialog";
import { TbListDetails } from "react-icons/tb";
import DetailsDialog from "../../components/DetailsDialog/DetailsDialog";
import DeleteBox from "../DeleteBox/DeleteBox";

import { StyledRow } from "./styled";
import PropTypes from "prop-types";

export default function TableRow({ data, setOpen, type}) {

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

TableRow.propTypes = {
    data: PropTypes.object.isRequired,
    setOpen: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};
