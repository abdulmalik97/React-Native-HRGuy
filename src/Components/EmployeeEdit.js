import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../Actions';
import { Button, Card, CardSection, Confirm } from './Common';

class EmployeeEdit extends Component {
  state = {
    showModal: false,
  };
  componentWillMount() {
    _.each(this.props.employee.val, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    Actions.pop();
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid,
    });
  }

  sendText() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Please note that your new schedule is ${shift}`);
    // here we used a string interpolation so we use back ticks instead of
    // normal quotes.
  }
  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
    this.setState({
      showModal: false,
    });
    Actions.employeelist();
  }
  onDecline() {
    this.setState({
      showModal: false,
    });
  }
  render() {
    return (
      <View>
        <Card>
          <EmployeeForm />
          <CardSection style={{ flexDirection: 'row' }}>
            <Button
              text="Save Changes"
              onPress={this.onButtonPress.bind(this)}
              style={{ height: 70 }}
            />
            <Button
              text="Text Schedule"
              style={{ height: 70 }}
              onPress={this.sendText.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Button
              text="Fire Employee"
              onPress={() =>
                this.setState({
                  showModal: !this.state.showModal,
                })}
              style={styles.fireEmployeeStyle}
              font={{ color: 'red', fontSize: 20 }}
            />
          </CardSection>
        </Card>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire?
        </Confirm>
      </View>
    );
  }
}

const styles = {
  fireEmployeeStyle: {
    borderWidth: 0,
    width: 300,
    shadowOpacity: 0,
    backgroundColor: '#FFFFFF',
  },
};

const mapStateToProps = (state) => {
  const { name, shift, phone } = state.auth;
  return { name, shift, phone };
};
export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete,
})(EmployeeEdit);
