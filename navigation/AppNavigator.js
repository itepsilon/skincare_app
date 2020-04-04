import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {Provider} from 'react-redux';
import store from '../store';

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
  }, {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal"
      },
      initialRouteName: "Login",
    })
  })
);

class AppNavigator extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}

export default AppNavigator
