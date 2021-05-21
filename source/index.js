import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Store from './reduxStore'
import HomePage from './screens/home';
import ViewTcard from './screens/viewtcard';

const Router = createStackNavigator(
  {
    Home: { 
      screen: HomePage
    },
    ViewTcard: { 
      screen: ViewTcard
    }

  },
  {
    index: 0,
    initialRouteName: 'Home',
    headerMode: 'none',
     defaultNavigationOptions: {
    },
  }
);

const AppContainer = createAppContainer(Router);

export default (props) => {
  return (
    <View style={styles.flex}>
      <Provider store={Store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppContainer screenProps={props} />
      </ApplicationProvider>
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
})