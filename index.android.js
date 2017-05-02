import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Splash from './app/Components/Splash/Splash'

export default class GsGitHubApp extends Component {
  render() {
    return (
      <Splash/>
    );
  }
}

AppRegistry.registerComponent('GsGitHubApp', () => GsGitHubApp);
