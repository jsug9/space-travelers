import missionsReducer, { GET_MISSIONS, JOIN_MISSION, LEAVE_MISSION } from '../redux/missions/missions';

describe('Get Missions', () => {
  test('When Get Missions is executed, it should return a list of missions', () => {
    const initialState = [];
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
        isJoined: false,
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        isJoined: true,
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
        isJoined: false,
      },
    ];

    const action = { type: GET_MISSIONS, payload: state };
    const result = missionsReducer(initialState, action);
    expect(result).toEqual(state);
  });
});

describe('Join a mission', () => {
  test('When a mission is joined, its state should change to true', () => {
    const action = { type: JOIN_MISSION, id: '1' };
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
        wikipedia: 'link',
        isJoined: false,
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        wikipedia: 'link',
        isJoined: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
        wikipedia: 'link',
        isJoined: false,
      },
    ];
    const result = missionsReducer(state, action);
    const newState = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
        wikipedia: 'link',
        isJoined: false,
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        wikipedia: 'link',
        isJoined: true,
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
        wikipedia: 'link',
        isJoined: false,
      },
    ];
    expect(result).toEqual(newState);
  });

  test('When try to join a mission with a wrong id, it should return the same state', () => {
    const action = { type: JOIN_MISSION, id: '2' };
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
        wikipedia: 'link',
        isJoined: false,
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        wikipedia: 'link',
        isJoined: false,
      },
    ];
    const result = missionsReducer(state, action);
    expect(result).toEqual(state);
  });
});

describe('Leave a mission', () => {
  test('When mission is left, its state should change to false', () => {
    const action = { type: LEAVE_MISSION, id: '0' };
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
        wikipedia: 'link',
        isJoined: true,
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        wikipedia: 'link',
        isJoined: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
        wikipedia: 'link',
        isJoined: false,
      },
    ];
    const result = missionsReducer(state, action);
    const newState = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
        wikipedia: 'link',
        isJoined: false,
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        wikipedia: 'link',
        isJoined: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission2',
        mission_description: 'Description 2',
        wikipedia: 'link',
        isJoined: false,
      },
    ];
    expect(result).toEqual(newState);
  });

  test('When try to leave a mission with a wrong id, it should return the same state', () => {
    const action = { type: LEAVE_MISSION, id: '2' };
    const state = [
      {
        mission_id: '0',
        mission_name: 'Mission0',
        mission_description: 'Description 0',
        wikipedia: 'link',
        isJoined: true,
      },
      {
        mission_id: '1',
        mission_name: 'Mission1',
        mission_description: 'Description 1',
        wikipedia: 'link',
        isJoined: false,
      },
    ];
    const result = missionsReducer(state, action);
    expect(result).toEqual(state);
  });
});
