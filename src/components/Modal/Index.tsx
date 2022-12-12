import Modal from 'react-modal';

import { customStyles } from './style';
import { FlexBox } from '../../styles';
import { IModalProps } from '../../types';

import Button from '../Button';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onClose, onDelete }: IModalProps) => {
  return (
    <Modal
      contentLabel='Delete coin modal'
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <FlexBox
        width='100%'
        height='100%'
        flexDirection='column'
        justifyContent='space-between'
      >
        <div>
          <h2>Delete Coin</h2>
          <p>Coin will be deleted from the list, do you want to delete coin?</p>
        </div>
        <FlexBox justifyContent='flex-end' width='100%'>
          <Button onClick={onClose} width='20%'>
            Cancel
          </Button>
          <Button width='20%' isDelete onClick={onDelete}>
            Delete
          </Button>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
};

export default ModalComponent;
