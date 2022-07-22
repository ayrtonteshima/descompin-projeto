import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Modal } from '../../components/Modal/Modal';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction, saveFolderAction } from '../../store/actions';
import { saveFolderInitType, saveFolderSuccessType } from '../../store/types';

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [ folderName, setFolderName ] = useState('');

  const handleClose = () => {
    dispatch(closeModalsAction());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFolderAction(dispatch, folderName, state.activePinId);
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      handleClose();
    }
  }, [state.type])

  return (
    <Modal
      open={open}
      title="Criar pasta"
      onHide={handleClose}
      controls={[
        {
          label: 'Criar e salvar',
          loadingLabel: 'Criando',
          variant: 'secondary',
          loading: state.type === saveFolderInitType,
          type: 'submit',
          form: 'form-criar-pasta'
        }
      ]}
    >
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da pasta</Form.Label>
          <Form.Control type="text" placeholder="Ex: Matemática" value={folderName} onChange={handleChange} />
        </Form.Group>
      </Form>
    </Modal>
  )
}