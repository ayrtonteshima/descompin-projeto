import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction } from '../../store/actions';

export const ModalSavePin = ({ open }) => {
  const { dispatch } = useAppContext();
  const handleClose = () => {
    console.log('fechando!!')
    dispatch(closeModalsAction())
  }
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
          onClick: () => {
            console.log('Clicou em criar pasta')
          }
        }
      ]}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Matemática</Col>
            <Col xs={4} className="text-end"><Button label="Salvar" loadingLabel="Salvando" /></Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Matemática</Col>
            <Col xs={4} className="text-end"><Button label="Salvar" loadingLabel="Salvando" /></Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Modal>
  )
}