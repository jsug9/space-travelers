import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
