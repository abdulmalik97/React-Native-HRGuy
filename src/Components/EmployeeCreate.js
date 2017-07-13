import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './Common';
import { employeeUpdate, employeeCreate, employeesFetch } from '../Actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeUpdate({ prop: 'name', value: '' });
    this.props.employeeUpdate({ prop: 'phone', value: '' });
    this.props.employeeUpdate({ prop: 'shift', value: '' });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    Actions.employeelist();
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button text="Create" onPress={this.onButtonPress.bind(this)} />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { name, shift, phone } = auth;
  return { name, shift, phone };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate, employeesFetch })(
  EmployeeCreate,
);
