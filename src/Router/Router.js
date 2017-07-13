import React from 'react';
import {Scene, Router,Actions} from 'react-native-router-flux';
import LoginForm from '../Components/LoginForm';
import EmployeeList from '../Components/EmployeeList';
import EmployeeCreate from '../Components/EmployeeCreate';
import EmployeeEdit from '../Components/EmployeeEdit';

const RouterComponent =()=> {
  return(
    <Router>

          <Scene key="auth" initial >
              <Scene key="login" component={ LoginForm}
                     title="Please Login"
                     initial
                     hideNavBar
                    //  navigationBarStyle={{opacity:0.3}}
                    //  titleStyle= {{fontSize:29}}
                    //  titleOpacity= '0.9'
                    //  animation= "fade"
                    //  duration= '5000'
                    //  direction= "vertical"

                    />

              <Scene
              key="employeelist"
              component={EmployeeList}
              title="Employees"
              onRight= {() => Actions.employeecreate()}
              rightTitle="Add"
              type= "reset"
              />
              <Scene key= "employeecreate" component={ EmployeeCreate} title="Add new Employee"/>
              <Scene key= "employeeedit" component ={EmployeeEdit} title="Edit your employee"/>
          </Scene>

    </Router>
  );
};

export default RouterComponent;
