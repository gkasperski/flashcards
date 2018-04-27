import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import Colors from './config/Colors';
import { AppConfig } from './config/AppConfig';
import { setNav } from './navigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondaryBackgroundColor,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.white,
    marginTop: 5,
  },
});

/**
 * App root loading screen
 */
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrap();
  }

  componentDidMount() {
    setNav(this.props.navigation);
  }

  /**
   * Checks whether user was logged in before and navigates to proper navigation stack
   * TODO: REDUX INTEGRATION
   */
  bootstrap = async () => {
    const config = await AppConfig.getConfig();
    const userToken = config.getApiKey();

    // Set proper path according to Auth State
    this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.white} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
}

export default AuthLoadingScreen;
