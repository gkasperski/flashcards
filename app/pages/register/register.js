import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon, Text, Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import styles from './register.style';
import RegistrationLogo from '../../components/registrationLogo';
import {
  displayNameRegistrationFieldHasChanged,
  emailAddressRegistrationFieldHasChanged,
  passwordRegistrationFieldHasChanged,
  confirmPasswordRegistrationFieldHasChanged,
  registerNewUser,
} from '../../actions/userActions';
import { registration } from '../../reducers/userReducer';

class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Spinner visible={this.props.loadingState} textContent="Creating new user..." textStyle={{ color: '#FFF' }} />
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon style={{ color: '#fff' }} name="arrow-back" type="MaterialIcons" />
        </Button>
        <View style={styles.logoContainer}>
          <RegistrationLogo />
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Your display name"
            style={styles.input}
            onSubmitEditing={() => this.emailInput.focus()}
            returnKeyType="next"
            autoCorrect={false}
            ref={(input) => { this.displayName = input; return input; }}
            onChangeText={text => this.props.displayNameRegistrationFieldHasChanged(text)}
            value={this.props.registration.displayName}
          />

          <TextInput
            placeholder="E-mail address"
            style={styles.input}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            ref={(input) => { this.emailInput = input; return input; }}
            onChangeText={text => this.props.emailAddressRegistrationFieldHasChanged(text)}
            value={this.props.registration.email}
          />

          <TextInput
            placeholder="Password"
            style={styles.input}
            onSubmitEditing={() => this.rePasswordInput.focus()}
            returnKeyType="next"
            ref={(input) => { this.passwordInput = input; return input; }}
            onChangeText={text => this.props.passwordRegistrationFieldHasChanged(text)}
            value={this.props.registration.password}
            secureTextEntry
          />

          <TextInput
            placeholder="Re-type your password"
            style={styles.input}
            returnKeyType="go"
            ref={(input) => { this.rePasswordInput = input; return input; }}
            onChangeText={text => this.props.confirmPasswordRegistrationFieldHasChanged(text)}
            value={this.props.registration.confirmPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.registerNewUser(this.props.registration)}
          >
            <Text style={styles.buttonText}>REGISTER AND PROCEED</Text>
            <Icon style={{ color: '#fff' }} name="play-arrow" type="MaterialIcons" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Register.propTypes = {
  registerNewUser: PropTypes.func.isRequired,
  displayNameRegistrationFieldHasChanged: PropTypes.func.isRequired,
  emailAddressRegistrationFieldHasChanged: PropTypes.func.isRequired,
  passwordRegistrationFieldHasChanged: PropTypes.func.isRequired,
  confirmPasswordRegistrationFieldHasChanged: PropTypes.func.isRequired,
  registration: PropTypes.shape(registration).isRequired,
  loadingState: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loadingState: state.userReducer.loadingState,
  registration: state.userReducer.registration,
});


const RegisterContainer = connect(mapStateToProps, {
  registerNewUser,
  displayNameRegistrationFieldHasChanged,
  emailAddressRegistrationFieldHasChanged,
  passwordRegistrationFieldHasChanged,
  confirmPasswordRegistrationFieldHasChanged,
})(Register);
export default RegisterContainer;
