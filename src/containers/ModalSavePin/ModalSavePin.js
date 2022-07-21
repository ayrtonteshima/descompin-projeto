import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction } from '../../store/actions';
import { fetchFoldersAction, openModalCreateFolder } from '../../store/actions';

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const handleClose = () => {
    console.log('fechando!!')
    dispatch(closeModalsAction())
  };

  const handleClickCreateFolder = () => {
    console.log('Clicou em criar pasta');
    dispatch(openModalCreateFolder());
  };

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, [])

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <Modal
      title="Salvar pin"
      open={open}
      onHide={handleClose}
      controls={[
        {
          label: 'Criar pasta',
          variant: 'secondary',
          loading: false,
          loadingLabel: 'Criando',
          onClick: handleClickCreateFolder
        }
      ]}>
      <ListGroup variant="flush">
        {state.folders.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end"><Button label="Salvar" loadingLabel="Salvando" /></Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  )
}