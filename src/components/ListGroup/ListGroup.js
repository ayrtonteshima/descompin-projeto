import ListGroupBS from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export const ListGroup = ({ items = [] }) => {
  return (
    <ListGroupBS as="ul">
      {items.map(item => (
        <ListGroupBS.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
          </div>
          <Badge bg="primary" pill>
            {item.total}
          </Badge>
        </ListGroupBS.Item>
      ))}
    </ListGroupBS>
  )
}