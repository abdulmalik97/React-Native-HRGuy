import React , {Component} from 'react';
import {View} from 'react-native';
import {Button , Card,CardSection,Confirm} from './Common';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {Actions} from "react-native-router-flux";
import {employeeUpdate,employeeSave,employeeDelete} from '../Actions';
import Communications from 'react-native-communications';
import _ from 'lodash';

class EmployeeEdit extends Component {

  state={
    showModal: false
  };
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

    sendText(){
      const {phone,shift} =this.props;
      Communications.text(phone, `Please note that your new schedule is ${shift}`);
      //here we used a string interpolation so we use back ticks instead of
      //normal quotes.
    }
    onAccept(){
      this.props.employeeDelete({uid: this.props.employee.uid});
      this.setState({
        showModal: false
      });
      Actions.employeelist();
    }
    onDecline(){
      this.setState({
        showModal: false
      });
    }
  render(){
    return (
      <View>
        <Card>
          <EmployeeForm />
          <CardSection>
              <Button text="Save Changes" onPress={this.onButtonPress.bind(this)}/>
          </CardSection>
          <CardSection>
              <Button text="Send schedule" onPress={this.sendText.bind(this)}/>
          </CardSection>
          <CardSection>
              <Button text="Fire Employee" onPress={()=> this.setState({
                showModal: !this.state.showModal
              })}/>
          </CardSection>
        </Card>

        <Confirm visible={this.state.showModal}
                 onAccept={this.onAccept.bind(this)}
                 onDecline={this.onDecline.bind(this)}
                 >
          Are you sure you want to fire?
        </Confirm>
      </View>
    );
  }
}

const mapStateToProps = (state)=>{
  const {name,shift,phone} = state.auth;
  return {name,shift,phone};
};
export default connect(mapStateToProps, {employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);
