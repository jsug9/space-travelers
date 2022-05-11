import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../redux/missions/missions';

const MissionItem = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (!mission.isJoined) {
      dispatch(joinMission(mission.mission_id));
    } else {
      dispatch(leaveMission(mission.mission_id));
    }
  };

  return (
    <tr>
      <th><h3>{mission.mission_name}</h3></th>
      <th><p>{mission.mission_description}</p></th>
      <th className="align-middle"><Badge bg="primary">Active Member</Badge></th>
      <th className="align-middle">
        <Button onClick={clickHandler} type="button" variant="outline-secondary">
          {(mission.isJoined) ? 'Leave ' : 'Join '}
          Mission
        </Button>
      </th>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    mission_description: PropTypes.string,
    isJoined: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
