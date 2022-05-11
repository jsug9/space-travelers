import { useSelector } from 'react-redux';

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
            </p>
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
