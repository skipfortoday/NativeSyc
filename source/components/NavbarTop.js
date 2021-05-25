import React from "react";
import { StyleSheet } from "react-native";
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const renderBackAction = () => <TopNavigationAction icon={renderItemIcon} />;
const renderItemIcon = (props) => <Icon {...props} name="hard-drive-outline" />;

export default NavbarTop = (props) => {
  return (
    <TopNavigation
      style={styles.navigation}
      title={props.link.navigation.state.routeName}
      accessoryLeft={renderBackAction}
    />
  );
};


const styles = StyleSheet.create({
    navigation: {
      marginTop: 18,
    },
  });