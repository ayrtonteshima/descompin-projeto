import ModalBS from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Modal = ({ title, children, open, controls = [] }) => {
  return (
    <ModalBS show={open} onHide={() => {}}>
      <ModalBS.Header closeButton>
        <ModalBS.Title>{title}</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>{children}</ModalBS.Body>
      <ModalBS.Footer>
        {controls.map((control, controlIndex) => (
          <Button key={controlIndex} variant={control.variant} onClick={control.onClick}>
            {control.label}
          </Button>
        ))}
      </ModalBS.Footer>
    </ModalBS>
  );
}