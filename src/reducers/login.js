import { login } from '../apis/index';

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
    const { username } = response.data;

    dispatch(loginSuccess(username));
    window.location.hash = '#/alarmRegister';
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  username: null,
  isError: false,
  errorMessage: '',
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
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
