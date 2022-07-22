import Container from 'react-bootstrap/Container';
import { ListGroup } from '../../components/ListGroup/ListGroup';
import { useAppContext } from '../../store/AppContext';

const adapterItems = (items) => {
  return items.map(item => ({
    title: item.name,
    total: item.pins.length
  }))
}

export const MinhasPastasPage = () => {
  const { state } = useAppContext();
  return (
    <Container>
      <ListGroup items={adapterItems(state.folders)} />
    </Container>
  )
}