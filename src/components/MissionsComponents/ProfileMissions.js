import { useSelector } from 'react-redux';
import JoinButton from './JoinButton';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.missions);
  const filteredMissions = missions.filter((mission) => mission.isJoined);

  const renderList = () => {
    if (filteredMissions.length) {
      return (
        filteredMissions.map((mission) => (
          <li key={mission.mission_id} className="profileLi">
            <p className="profileLiLeft">
              {mission.mission_name}
              {' — '}
              <a
                href={mission.wikipedia}
                target="_blank"
                rel="noreferrer"
                className="readMore"
              >
                Read more
              </a>
            </p>
            <JoinButton isJoined={mission.isJoined} id={mission.mission_id} />
          </li>
        ))
      );
    }
    return <li className="emptyLi">No missions joined</li>;
  };

  return (
    <div className="profileSubContainer">
      <h2 className="profileH2">My Missions</h2>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
};

export default ProfileMissions;
