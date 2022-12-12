import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { StyledIconButton } from "./style";

import ModalComponent from '../Modal/Index';




const CloseIcon = ({onClick}: ICloseIconProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleDelete = () => {
        onClick()
        handleClose()
    }
    return (
        <>
        <StyledIconButton onClick={() => setIsOpen(true)}>
          <AiOutlineClose />
        </StyledIconButton>
        <ModalComponent onDelete={handleDelete} isOpen={isOpen} onClose={handleClose} />
        </>
    );
};

export default CloseIcon;