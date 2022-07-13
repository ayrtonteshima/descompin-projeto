import ButtonBS from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const Button = ({ loading, label, loadingLabel, ...buttonProps }) => {
  return (
    <ButtonBS {...buttonProps}>
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