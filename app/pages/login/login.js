import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import LoginForm from './loginForm';
import Logo from '../../components/logo';
import styles from './login.style';

class Login extends Component {
  componentDidMount() {
    // actions
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Spinner visible={this.props.loadingState} textContent="Logging in..." textStyle={{ color: '#FFF' }} />
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.continue}>
          <TouchableOpacity bordered light style={styles.continueButton} onPress={() => this.props.navigation.navigate('AppStack')}>
            <Text style={styles.continueText}>Continue as a guest </Text>
            <Icon style={styles.continueText} type="SimpleLineIcons" name="arrow-right" />
          </TouchableOpacity>
        </View>
        <LoginForm />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Don&apos;t have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.signUpText}> Sign up!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  loadingState: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loadingState: state.userReducer.loadingState,
});


const LoginContainer = connect(mapStateToProps, {})(Login);
export default LoginContainer;
