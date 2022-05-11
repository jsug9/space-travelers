import React from 'react';
import PropTypes from 'prop-types';
import ReserveButton from './ReserveButton';

const RocketItem = (props) => {
  const { rocket } = props;
  const badgeClass = rocket.isReserved ? 'reserveBadge' : 'reserveBadgeDisabled';

  return (
    <div className="rocketItemContainer">
      <img className="imgContainer" src={rocket.image} alt="Rocket" />
      <div className="descriptionContainer">
        <h2 className="rocketName">{rocket.name}</h2>
        <p className="rocketDescription">
          <span className={badgeClass}>Reserved</span>
          {rocket.description}
          <br />
          <a href={rocket.wikiLink} target="_blank" rel="noreferrer">Read more</a>
        </p>
        <ReserveButton isReserved={rocket.isReserved} id={rocket.id} />
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    wikiLink: PropTypes.string,
    image: PropTypes.string,
    isReserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
