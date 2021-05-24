import React from "react";
import { StyleSheet } from "react-native";
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const renderBackAction = () => <TopNavigationAction icon={renderItemIcon} />;
const renderItemIcon = (props) => <Icon {...props} name="hard-drive-outline" />;

export default NavbarTop = () => {
  return (
    <TopNavigation
      style={styles.navigation}
      title="List data table Tcard"
      accessoryLeft={renderBackAction}
    />
  );
};
const styles = StyleSheet.create({
    navigation: {
      marginTop: 18,
    },
  });