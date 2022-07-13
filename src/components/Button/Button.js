import ButtonBS from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const Button = ({ loading, variant, disabled, label, loadingLabel, onClick }) => {
  console.log(loading, label, loadingLabel)
  return (
    <ButtonBS variant={variant} disabled={disabled} onClick={onClick}>
        {loading && (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>{' '}
          </>
        )}
        {loading ? loadingLabel : label}
      </ButtonBS>
  )
}