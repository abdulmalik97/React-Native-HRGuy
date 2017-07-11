import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {Card , CardSection , Input , Button,Spinner} from './Common';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser } from '../Actions';

class LoginForm extends Component {


   onEmailChanged(text) {
     this.props.emailChanged(text);

  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    const {email,password}= this.props;
    this.props.loginUser({email,password});
  }
  renderButton (){
    if (this.props.loading){
      return(
      <Spinner size= "small"/>
    );
    }
    return (
    <Button
    text= "Login"
    onPress= {this.onButtonPress.bind(this)}
    style={{alignSelf:'center'}}
    />

  );
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
          text= "Email"
          placeholder= "Email@email.com"
          onChangeText={this.onEmailChanged.bind(this)}
          value={this.props.email}
          />
        </CardSection>


        <CardSection>
          <Input
            text="Password"
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            />

        </CardSection>




        <CardSection>
        <Text style= {{
          fontSize: 18,
          color: 'red',
          alignSelf: 'center',
          backgroundColor: '#FFFCFC'
        }}>
        {this.props.error}</Text>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({auth}) =>{
  const {email,password,error,loading} = auth ;
  return {email,password,error,loading} ;
};

export default connect(mapStateToProps, {
  emailChanged,passwordChanged,loginUser
})(LoginForm);
