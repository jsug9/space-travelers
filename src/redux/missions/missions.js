import { fetchMissions } from '../APIcall';

const GET_MISSIONS = 'Space_Travelers/missions/GET_MISSIONS';
const JOIN_MISSION = 'Space_Travelers/missions/JOIN_MISSION';

const initialState = [];

let isLoading = false;

export const getMissions = () => async (dispatch) => {
  if (isLoading) return;
  const result = await fetchMissions();
  const missions = result.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
  }));
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
  isLoading = true;
};

export const joinMission = (id) => (
  {
    type: JOIN_MISSION,
    id,
  });

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION: {
      console.log(state);
      return state.map((mission) => (mission.mission_id === action.id
        ? { ...mission, reserved: true }
        : mission));
    }
    default:
      return state;
  }
};

export default missionsReducer;
