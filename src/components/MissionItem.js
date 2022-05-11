import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { mission } = props;
  // const badgeClass = mission.isReserved ? 'reserveBadge' : 'reserveBadgeDisabled';

  return (
    <tr>
      <th><h3>{mission.mission_name}</h3></th>
      <th><p>{mission.mission_description}</p></th>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    mission_description: PropTypes.string,
  }).isRequired,
};

export default MissionItem;
