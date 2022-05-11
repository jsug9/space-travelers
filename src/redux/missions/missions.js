import { fetchMissions } from '../APIcall';

const GET_MISSIONS = 'Space_Travelers/missions/GET_MISSIONS';
const JOIN_MISSION = 'Space_Travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'Space_Travelers/missions/LEAVE_MISSION';

const initialState = [];

let isLoading = false;

export const getMissions = () => async (dispatch) => {
  if (isLoading) return;
  const result = await fetchMissions();
  const missions = result.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
    isJoined: false,
  }));
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
  isLoading = true;
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missionStatus = (state, id, status) => {
  const newState = state.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      mission_description: mission.mission_description,
      isJoined: status,
    };
  });
  return newState;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return missionStatus(state, action.id, true);
    case LEAVE_MISSION:
      return missionStatus(state, action.id, false);
    default:
      return state;
  }
};

export default missionsReducer;
