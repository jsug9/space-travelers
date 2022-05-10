import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rockets';

const RocketItem = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  const reserveButtonText = rocket.isReserved ? 'Cancel Reservation' : 'Reserve Rocket';
  const reservedRocketStatus = (id) => {
    if (rocket.isReserved) {
      console.log('Cancel rocket');
    } else {
      dispatch(reserveRocket(id));
    }
  };

  const reserveButtonClass = rocket.isReserved ? 'cancelButton' : 'reserveButton';
  const badgeClass = rocket.isReserved ? 'reserveBadge' : 'reserveBadgeDisabled';

  return (
    <div className="rocketItemContainer">
      <img className="imgContainer" src={rocket.image} alt="Rocket" />
      <div className="descriptionContainer">
        <h2 className="rocketName">{rocket.name}</h2>
        <p className="rocketDescription">
          <span className={badgeClass}>Reserved</span>
          {rocket.description}
        </p>
        <button className={reserveButtonClass} type="button" onClick={() => reservedRocketStatus(rocket.id)}>{reserveButtonText}</button>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    isReserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
