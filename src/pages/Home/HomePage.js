import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../components/Card/Card';
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavePin';
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';

export const HomePage = () => {
  return (
    <div>
      <ModalSavePin open={false} />
      <ModalCreateFolder open={false} />
      <Notification
        message='Criado com sucesso'
        onClose={() => {
          console.log('Clicou em fechar')
        }}
      />
      <Container fluid>
        <Row>
          <Col xs={12} md={2}><Card title="Matemática" image="https://picsum.photos/200/300?53" total={0} /></Col>
          <Col xs={12} md={2}><Card title="Trigonometria" image="https://picsum.photos/200/300?13" total={1} /></Col>
        </Row>
      </Container>  
    </div>
  )
}