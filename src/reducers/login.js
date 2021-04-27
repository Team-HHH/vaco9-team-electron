import { login } from '../apis/index';
import { ipcRenderer } from 'electron';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

const loginFail = (message) => ({
  type: LOGIN_FAILURE,
  payload: message,
});

export const fetchLogin = (loginInput) => async (dispatch) => {
  try {
    const response = await login(loginInput);
    console.log(response.data);
    const { name } = response.data;

    dispatch(loginSuccess(name));
    ipcRenderer.send('storeUserData', loginInput);
    window.location.hash = '#/alarmRegister';
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  name: null,
  isError: false,
  errorMessage: '',
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        name: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
