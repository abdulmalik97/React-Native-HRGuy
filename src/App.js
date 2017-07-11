import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux' ;
import reducers from './Reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './Components/LoginForm';
import RouterComponent from './Router/Router';

export default class App extends Component {
  componentWillMount(){ //C of componentWillMount should always be SMALLLLL!
    const config = {
    apiKey: "AIzaSyBqycuVPvfZUuRMx009FMzEopw6_VGsKZ0",
    authDomain: "hrguy-1be2c.firebaseapp.com",
    databaseURL: "https://hrguy-1be2c.firebaseio.com",
    projectId: "hrguy-1be2c",
    storageBucket: "hrguy-1be2c.appspot.com",
    messagingSenderId: "740214655091"
    };
    firebase.initializeApp(config);

  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //the second argument is to put any other initial state that we might want to pass
    //in the redux application . we dont use it so common, it is more common in
    //in server applications. example - prepopulate email and password to some value

    //the third argument is called the store enhancers , here the store enhancer is
    //redux thunk

    return(
      <Provider store = {store}>

    <RouterComponent/>

      </Provider>
    );
  }
}
