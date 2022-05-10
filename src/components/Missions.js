import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { checkStatus } from '../redux/missions/missions';

function Missions( { mission } ) {
  // const dispatch = useDispatch();
  // const missions = useSelector((state) => state.missions);

  return (
    <div>
      <h3>{mission.mission_name}</h3>
    </div>
  );
}

export default Missions;
