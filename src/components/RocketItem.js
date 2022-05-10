import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket } = props;

  return (
    <div className="rocketItemContainer">
      {/* <img className="imgContainer" src={rocket.flickrImage} alt="Rocket" /> */}
      <div className="descriptionContainer">
        <h2 className="rocketName">{rocket.rocket_name}</h2>
        <p>
          <span className="reserveStatus">Reserved</span>
          <span className="rocketDescription">{rocket.description}</span>
        </p>
        <button className="reserveButton" type="button">Reserve</button>
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