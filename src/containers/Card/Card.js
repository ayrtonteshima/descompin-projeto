import { Card } from '../../components/Card/Card.js'
import { useAppContext } from '../../store/AppContext.js';
import { openModalSavePinAction } from '../../store/actions.js';

export const CardContainer = (props) => {
  const { state, dispatch } = useAppContext();

  const handleClick = () => {
    console.log('Clicou');
    dispatch(openModalSavePinAction())
  }
  return (
    <Card {...props} onClick={handleClick} />
  )
}