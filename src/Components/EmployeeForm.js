import React, {Component} from 'react' ;
import {View,Text,Picker,StyleSheet} from 'react-native';
import {CardSection,Input} from './Common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../Actions';

class EmployeeForm extends Component {
  render(){
    return(
      <View>
      <CardSection>
        <Input
           text="Name"
           placeholder = "Name"
           value= {this.props.name}
           onChangeText= {value => this.props.employeeUpdate({prop: 'name', value})}
        />
      </CardSection>

      <CardSection>
        <Input
        text= "Phone"
        placeholder= "+91 9700133563"
        keyboardType= 'numeric'
        value={this.props.phone}
        onChangeText={value=>this.props.employeeUpdate({prop:'phone',value})}
        />
      </CardSection>

      <CardSection>
      <Text style={styles.pickerTextStyle}> Shift </Text>
        <Picker
        style={{flex: 1}}
        selectedValue= {this.props.shift}
        onValueChange={value=> this.props.employeeUpdate({prop : 'shift',value})}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  pickerTextStyle:{
    fontSize: 18,
    paddingLeft: 20,
    //flex:1

  }
});

const mapStateToProps = (state)=> {
  const {name,phone,shift} = state.auth;
  return {name,phone,shift};
};
export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);
