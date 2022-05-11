import React from 'react';
// import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Mission from '../components/Mission';

function MissionsContainer() {
  // const missions = useSelector((state) => state.missionsReducer);
  const state = {
    missions: [
      {
        mission_id: 1,
        mission_name: 'Thaicon',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        mission_id: 2,
        mission_name: 'Tesltar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        mission_id: 3,
        mission_name: 'Iridium NEXT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  };

  return (

    <Table>
      {/* <h1>Missions</h1> */}
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          {/* <th>Status</th>
          <th>Action</th> */}
        </tr>
      </thead>
      <tbody>
        {state.missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </Table>
  );
}

export default MissionsContainer;
