import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../../redux/rockets/rockets';
import RocketItem from './RocketItem';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    rockets.map((rocket) => (
      <RocketItem key={rocket.id} rocket={rocket} />
    ))
  );
};

export default RocketsList;
