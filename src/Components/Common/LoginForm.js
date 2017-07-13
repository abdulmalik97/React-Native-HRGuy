import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from '../Common';
import firebase from 'firebase';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLogInSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLogInSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authorization Failed', loading: false });
  }
  onLogInSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: 'false',
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)} text="Login" />;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
            text="Email"
            placeholder="user@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            value={this.state.text}
            onChangeText={password => this.setState({ password })}
            text="Password"
            placeholder="password"
          />
        </CardSection>
        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 28,
    alignSelf: 'center',
    color: 'red',
  },
});
