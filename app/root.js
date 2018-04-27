import React, { Component } from 'react';
import roboto from 'native-base/Fonts/Roboto.ttf';
import robotoMedium from 'native-base/Fonts/Roboto_medium.ttf';
import Expo from 'expo';
import Navigator from './navigator';

/**
 * Root app component.
 */
class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: roboto,
      Roboto_medium: robotoMedium,
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Navigator />
    );
  }
}

export default Root;
