import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useAppContext } from '../../store/AppContext';

export const Card = ({ image, title, total }) => {
  const user = useAppContext();
  return (
    <CardBS>
      <CardBS.Img src={image} alt="CardBS image" />
      <CardBS.ImgOverlay>
        <Button variant="primary">
          Salvar <Badge bg="secondary">{total}</Badge>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  )
}