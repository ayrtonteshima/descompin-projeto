import { Card } from '../../components/Card/Card.js'
import { useAppContext } from '../../store/AppContext.js';

export const CardContainer = (props) => {
  const { state, dispatch } = useAppContext();

  const handleClick = () => {
    console.log('Clicou');
    dispatch({
      type: 'open modal save pin'
    })
  }
  return (
    <Card {...props} onClick={handleClick} />
  )
}