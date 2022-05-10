import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket } = props;

  return (
    <div className="rocketItemContainer">
      <img className="imgContainer" src={rocket.image} alt="Rocket" />
      <div className="descriptionContainer">
        <h2 className="rocketName">{rocket.name}</h2>
        <p className="rocketDescription">
          <span className="reserveStatus">Reserved</span>
          {rocket.description}
        </p>
        <button className="reservedButton" type="button">Reserve Rocket</button>
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
  }).isRequired,
};

export default RocketItem;
