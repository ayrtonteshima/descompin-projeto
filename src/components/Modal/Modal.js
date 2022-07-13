import ModalBS from 'react-bootstrap/Modal';
import { Button } from '../Button/Button';

export const Modal = ({ title, children, open, controls = [] }) => {
  console.log(controls);
  return (
    <ModalBS show={open} onHide={() => {}}>
      <ModalBS.Header closeButton>
        <ModalBS.Title>{title}</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>{children}</ModalBS.Body>
      <ModalBS.Footer>
        {controls.map((control, controlIndex) => (
          <Button
            key={controlIndex}
            {...control}
          />
        ))}
      </ModalBS.Footer>
    </ModalBS>
  );
}