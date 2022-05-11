import { useSelector } from 'react-redux';
import ReserveButton from './ReserveButton';

const ProfileRockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="profileRockets">
      <h2 className="profileH2">My Rockets</h2>
      <ul>
        {rockets.filter((rocket) => rocket.isReserved).map((rocket) => (
          <li key={rocket.id} className="profileLi">
            <p className="profileLiLeft">
              {rocket.name}
              {' — '}
              <a href={rocket.wikiLink} target="_blank" rel="noreferrer">Read more</a>
            </p>
            <ReserveButton isReserved={rocket.isReserved} id={rocket.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileRockets;
