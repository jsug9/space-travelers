import { fetchMissions } from '../APIcall';

const GET_MISSIONS = 'Space_Travelers/missions/GET_MISSIONS';

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

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;

    default:
      return state;
  }
};

export default missionsReducer;
