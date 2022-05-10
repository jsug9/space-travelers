import { useSelector } from 'react-redux';

const ProfileRockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="profileRockets">
      <h2 className="profileH2">My Rockets</h2>
      <ul>
        {rockets.filter((rocket) => rocket.isReserved).map((rocket) => (
          <li key={rocket.id} className="profileLi">
            {rocket.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileRockets;
