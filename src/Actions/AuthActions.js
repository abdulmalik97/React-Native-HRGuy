import {
  EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL, LOGIN_USER,
  EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS
} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const employeeUpdate = ({prop,value}) => {
  console.log("im in update");
  return{
  type : EMPLOYEE_UPDATE,
  payload : {prop , value}
};
};
export const employeeCreate = ({name,phone,shift}) => {
   const {currentUser}= firebase.auth();
   return(dispatch) => {
   firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name,phone,shift})
    .then(() => {
      dispatch({type: EMPLOYEE_CREATE});
      Actions.employeelist({type:'reset'});
  });
 };
};

export const employeesFetch=()=> {
  const {currentUser}= firebase.auth();
  return(dispatch) =>{
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot => {
          dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
        });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
console.log("im in employee save");
  return (dispatch) => {
    console.log({uid});
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        console.log({uid});
        Actions.employeelist({type:'reset'});
        dispatch({type:EMPLOYEE_SAVE_SUCCESS });
      });
  };
};

//below are the different action creators
export const emailChanged = (text) => {
  return{
    type: EMAIL_CHANGED ,
    payload: text
  };
};

export const passwordChanged =(text)=> {
  return {
    type: PASSWORD_CHANGED,
    payload :text
  };
};

export const loginUser = ({email,password}) => {
  return (dispatch) => {
      dispatch({ type: LOGIN_USER});  //here LOGIN_USER controls the spinner
  firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user=> loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => loginUserSuccess(dispatch,user))
        .catch(() => loginUserFail(dispatch));
    });

  };
};


const loginUserSuccess = (dispatch , user) => {
  dispatch ({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.employeelist();
};

const loginUserFail = (dispatch ) => {
  dispatch ({
    type: LOGIN_USER_FAIL,
  });
} ;
