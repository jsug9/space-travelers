import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket } = props;

  return (
    <div className="rocketItemContainer">
      <img className="imgContainer" src={rocket.flickrImage} alt="Rocket" />
      <div className="descriptionContainer">
        <h2 className="rocketName">{rocket.rocket_name}</h2>
        <p className="rocketDescription">
          <span className="reserveStatus">Reserved</span>
          {rocket.description}
        </p>
        <button className="reserveButton" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.exact({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickrImage: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
