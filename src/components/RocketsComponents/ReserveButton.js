import { useDispatch } from 'react-redux';
import { bool, string } from 'prop-types';
import { reserveRocket, cancelReserve } from '../../redux/rockets/rockets';

const ReserveButton = (props) => {
  const { isReserved, id } = props;
  const dispatch = useDispatch();
  const reserveButtonText = isReserved ? 'Cancel Reservation' : 'Reserve Rocket';
  const reservedRocketStatus = (id) => {
    if (isReserved) {
      dispatch(cancelReserve(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };
  const reserveButtonClass = isReserved ? 'cancelButton' : 'reserveButton';

  return (
    <button className={reserveButtonClass} type="button" onClick={() => reservedRocketStatus(id)}>{reserveButtonText}</button>
  );
};

ReserveButton.propTypes = {
  isReserved: bool.isRequired,
  id: string.isRequired,
};

export default ReserveButton;
