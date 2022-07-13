import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Modal } from '../../components/Modal/Modal';

export const ModalCreateFolder = ({ open }) => {
  const [ folderName, setFolderName ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fez o submit', folderName)
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  }

  return (
    <Modal
      open={open}
      title="Criar pasta"
      controls={[
        {
          label: 'Criar e salvar',
          loadingLabel: 'Criando',
          variant: 'secondary',
          loading: false,
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