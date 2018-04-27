import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './loginForm.style';
import Colors from '../../config/Colors';
import {
  loginAnUser,
  emailLoginFieldHasChanged,
  passwordLoginFieldHasChanged,
} from '../../actions/userActions';
import { login } from '../../reducers/userReducer';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="E-mail address"
          placeholderTextColor={Colors.lessTransparentGray}
          onChangeText={text => this.props.emailLoginFieldHasChanged(text)}
          value={this.props.login.email}
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          placeholder="Password"
          placeholderTextColor={Colors.lessTransparentGray}
          secureTextEntry
          ref={(input) => { this.passwordInput = input; return input; }}
          onChangeText={text => this.props.passwordLoginFieldHasChanged(text)}
          value={this.props.login.password}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.loginAnUser(this.props.login)}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


LoginForm.propTypes = {
  loginAnUser: PropTypes.func.isRequired,
  emailLoginFieldHasChanged: PropTypes.func.isRequired,
  passwordLoginFieldHasChanged: PropTypes.func.isRequired,
  login: PropTypes.shape(login).isRequired,
};

const mapStateToProps = state => ({
  login: state.userReducer.login,
});

const LoginFormContainer = connect(mapStateToProps, {
  loginAnUser,
  emailLoginFieldHasChanged,
  passwordLoginFieldHasChanged,
})(LoginForm);

export default LoginFormContainer;
