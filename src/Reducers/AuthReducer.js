import {
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from '../Actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ' ',
  loading: false,
  loading2: false,
  name: '',
  phone: '',
  shift: '',
  employeee: {},
};
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload.message, password: '', loading: false };
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    // action.payload==={prop:'name',value:'jane'}
    // The above statement is similar to saying that
    // newState[action.payload.prop] = action.payload.value
    // its called key interpolation. Its is a syntax from ES6
    case EMPLOYEE_CREATE:
      return { ...state, name: '', phone: '', shift: '' };
    case EMPLOYEES_FETCH_SUCCESS:
      return { employeee: action.payload };
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
