import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import {
  Icon,
  Layout,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const NavbarBottom = (props) => {
  const bottomState = useBottomNavigationState();
  const renderItemIcon = (props) => (
    <Icon {...props} name="hard-drive-outline" />
  );
  return (
    <Layout>
      <BottomNavigation
        style={styles.bottomNavigation}
        {...bottomState}
        onSelect={() => props.navigation.navigate("Home")}
      >
        <BottomNavigationTab icon={renderItemIcon} />
      </BottomNavigation>
    </Layout>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});

export default connect()(NavbarBottom);
