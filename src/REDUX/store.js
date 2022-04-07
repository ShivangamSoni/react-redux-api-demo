import { createStore, applyMiddleware } from "redux";
import ReduxThunkMiddleware from "redux-thunk";
import SITE_ACTION_TYPES from "./ActionTypes";

const defaultState = { nav: [], active: null };

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SITE_ACTION_TYPES.STORE_SITE_NAV: {
      return { ...state, nav: payload };
    }
    case SITE_ACTION_TYPES.SET_ACTIVE_ITEM: {
      const active = state.nav.filter((item) => item.id === payload)[0];
      return { ...state, active };
    }
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(ReduxThunkMiddleware));
