import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../Components/LoginForm';
import EmployeeList from '../Components/EmployeeList';
import EmployeeCreate from '../Components/EmployeeCreate';
import EmployeeEdit from '../Components/EmployeeEdit';

const RouterComponent = () =>
  (<Router>
    <Scene key="auth" initial>
      <Scene key="login" component={LoginForm} title="Please Login" initial hideNavBar />

      <Scene
        key="employeelist"
        component={EmployeeList}
        title="Employees"
        backTitle="Logout"
        backButtonTextStyle={{ color: 'red' }}
        onRight={() => Actions.employeecreate()}
        rightTitle="Add"
        type="reset"
      />
      <Scene key="employeecreate" component={EmployeeCreate} title="Add new Employee" />
      <Scene key="employeeedit" component={EmployeeEdit} title="Edit your employee" />
    </Scene>
  </Router>);

export default RouterComponent;
