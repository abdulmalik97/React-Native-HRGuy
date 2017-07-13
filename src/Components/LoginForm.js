import React, { Component } from 'react';
import { Text, StatusBar, KeyboardAvoidingView, View, Image } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { emailChanged, passwordChanged, loginUser } from '../Actions';
import { Card, CardSection, Input, Button, Spinner } from './Common';

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        text="Login"
        onPress={this.onButtonPress.bind(this)}
        style={{ alignSelf: 'center' }}
      />
    );
  }

  render() {
    return (
      <View style={styles.ViewStyle}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 15,
          }}
        >
          <Image source={require('../Logo/manager.png')} style={{ height: 200, width: 200 }} />
        </View>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 2 }}>
          <Card style={{ opacity: 0.8 }}>
            <StatusBar translucent barStyle="dark-content" />
            <CardSection>
              <Input
                text="Email"
                placeholder="Email@email.com"
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
              <Text
                style={{
                  fontSize: 18,
                  color: 'red',
                  alignSelf: 'center',
                  backgroundColor: '#FFFCFC',
                }}
              >
                {this.props.error}
              </Text>
              {this.renderButton()}
            </CardSection>
          </Card>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = {
  InputStyle: {
    opacity: 0.5,
  },
  ViewStyle: {
    backgroundColor: 'rgba(182, 251, 255, 0.62)',
    flex: 1,
    justifyContent: 'center',
  },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
