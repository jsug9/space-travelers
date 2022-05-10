import { fetchRockets } from '../APIcall';

const GET_ROCKETS = 'Space_Travelers/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'Space_Travelers/rockets/RESERVE_ROCKET';
const CANCEL_RESERVE = 'Space_Travelers/rockets/CANCEL_RESERVE';

const initialState = [];

const getRockets = () => async (dispatch) => {
  const result = await fetchRockets();
  const rockets = result.map((rocket) => ({
    id: rocket.rocket_id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    flickrImage: rocket.flickr_images[0],
  }));
  await dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const cancelReserve = (id) => ({
  type: CANCEL_RESERVE,
  id,
});

const reserveStatus = (state, id, status) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== id) { return rocket; }
    return { ...rocket, reserved: status };
  });
  return newState;
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;

    case RESERVE_ROCKET:
      return reserveStatus(state, action.id, true);

    case CANCEL_RESERVE:
      return reserveStatus(state, action.id, false);

    default:
      return state;
  }
};

export { getRockets, reserveRocket, cancelReserve };
export default rocketsReducer;
