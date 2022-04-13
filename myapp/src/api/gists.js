import { request } from "./request";
import thunk from 'redux-thunk';

export const getPublicGistsApi = (page) => {
  return request.get(`gists/public?page=${page}`);
};

// @TODO сделать санк
// export const searchGistsByNameApi = (name = "bogdanq") => {
//   return request.get(`/users/${name}/gists`);
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;


    export const searchGistsByNameApi = (page) => async (dispatch, _, api) => {
        try {
          dispatch(getPublicGistsApi());
      
          const { data } = await api.getPublicGistsApi(page);
      
          dispatch(getPublicGistsApi(data));
        } catch (e) {
          dispatch(getPublicGistsApi(e));
        }
        composeEnhancers(getPublicGistsApi(thunk))
      };