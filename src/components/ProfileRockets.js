import { useSelector } from 'react-redux';
import ReserveButton from './ReserveButton';

const ProfileRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.isReserved);

  const renderList = () => {
    if (filteredRockets.length) {
      return (
        filteredRockets.map((rocket) => (
          <li key={rocket.id} className="profileLi">
            <p className="profileLiLeft">
              {rocket.name}
              {' — '}
              <a href={rocket.wikiLink} target="_blank" rel="noreferrer">Read more</a>
            </p>
            <ReserveButton isReserved={rocket.isReserved} id={rocket.id} />
          </li>
        ))
      );
    }
    return <li className="emptyLi">No rockets reserved</li>;
  };

  return (
    <div className="profileRockets">
      <h2 className="profileH2">My Rockets</h2>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
};

export default ProfileRockets;
