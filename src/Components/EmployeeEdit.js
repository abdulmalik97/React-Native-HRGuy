import React , {Component} from 'react';
import {View} from 'react-native';
import {Button , Card,CardSection} from './Common';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {Actions} from "react-native-router-flux";
import {employeeUpdate,employeeSave} from '../Actions';
import _ from 'lodash';

class EmployeeEdit extends Component {
  componentWillMount(){
    _.each(this.props.employee.val, (value, prop) => {
      this.props.employeeUpdate({ prop,value});
    });
  }

  onButtonPress() {
      const { name, phone, shift  } = this.props;
      Actions.pop();
      this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
  render(){
    return (
      <View>
        <Card>
          <EmployeeForm />
          <CardSection>
              <Button text="Save Changes" onPress={this.onButtonPress.bind(this)}/>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
  const {name,shift,phone} = state.auth;
  return {name,shift,phone};
};
export default connect(mapStateToProps, {employeeUpdate,employeeSave})(EmployeeEdit);
