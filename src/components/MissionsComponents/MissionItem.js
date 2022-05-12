import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import JoinButton from './JoinButton';

const MissionItem = (props) => {
  const { mission } = props;

  const badgeRender = () => {
    if (mission.isJoined) {
      return <Badge bg="primary">Active Member</Badge>;
    }
    return <Badge bg="secondary">Not a member</Badge>;
  };

  return (
    <tr>
      <th><h3>{mission.mission_name}</h3></th>
      <th>
        <p>{mission.mission_description}</p>
        <a
          href={mission.wikipedia}
          target="_blank"
          rel="noreferrer"
          className="readMore"
        >
          Read more
        </a>
      </th>
      <th className="align-middle">
        {badgeRender()}
      </th>
      <th className="align-middle">
        <JoinButton isJoined={mission.isJoined} id={mission.mission_id} />
      </th>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    mission_description: PropTypes.string,
    wikipedia: PropTypes.string,
    isJoined: PropTypes.bool,
  }).isRequired,
};

export default MissionItem;
