import Container from 'react-bootstrap/Container';
import { ListGroup } from '../../components/ListGroup/ListGroup';

export const MinhasPastasPage = () => (
  <Container>
    <ListGroup items={[
      {
        title: 'Matemática',
        total: 3
      },
      {
        title: 'JavaScript',
        total: 10
      }
    ]} />
  </Container>
)