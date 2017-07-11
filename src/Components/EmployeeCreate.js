import React, {Component} from 'react';
import {Picker,StyleSheet,Text} from 'react-native';
import {Card, CardSection,Button, Input} from './Common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../Actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;

  this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render(){
    return (
    <Card>
      <EmployeeForm {...this.props}/>
      <CardSection>
          <Button text="Create" onPress={this.onButtonPress.bind(this)}/>
        </CardSection>
    </Card>

    );
  }
}

const mapStateToProps = ({auth}) =>{

  const {name, shift , phone} = auth;
  return {name,shift,phone};

};

export default connect(mapStateToProps, {employeeUpdate,employeeCreate})(EmployeeCreate);
