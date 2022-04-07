import axios from "axios";
import SITE_ACTION_TYPES from "./ActionTypes";

export const fetchNavbarItems = () => {
  const url = "https://reqres.in/api/users/";

  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      dispatch({ type: SITE_ACTION_TYPES.STORE_SITE_NAV, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setActiveItem = (id) => {
  return { type: SITE_ACTION_TYPES.SET_ACTIVE_ITEM, payload: id };
};
