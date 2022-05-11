import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { checkStatus } from '../redux/missions/missions';

function Mission({ mission }) {
  // const dispatch = useDispatch();
  // const missions = useSelector((state) => state.missions);

  return (
    <tr>
      <th><h3>{mission.mission_name}</h3></th>
      <th><p>{mission.description}</p></th>
    </tr>
  );
}

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default Mission;