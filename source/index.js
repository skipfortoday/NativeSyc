import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import Store from "./reduxStore";
import Home from "./screens/home";
import viewtcard from "./screens/viewtcard";
import kartupasien  from "./screens/kartupasien";


const Router = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    viewtcard: {
      screen: viewtcard,
    },
    KartuPasien: {
      screen: kartupasien,
    }
  },
  {
    index: 0,
    initialRouteName: "Home",
    headerMode: "none",
    defaultNavigationOptions: {},
  }
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

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
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
