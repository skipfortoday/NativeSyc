import React, { useEffect } from "react";
import { connect } from "react-redux";
import {  StyleSheet } from "react-native";
import {
  Divider,
  Icon,
  List,
  ListItem,
  TopNavigation,
  TopNavigationAction,
  Tab,
  Layout,
  TabView,
} from "@ui-kitten/components";
import NavbarBottom from "../../components/NavbarBottom";
import ListViewRender from '../../components/ListViewRender';

export const Home = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
  });
  const renderBackAction = () => <TopNavigationAction icon={renderItemIcon} />;
  const renderItemAccessory = (props) => (
    <Icon {...props} name="wifi-outline" />
  );
  const renderItemIcon = (props) => (
    <Icon {...props} name="hard-drive-outline" />
  );

  const renderItem = ({index}) => (
    <ListItem
      index={index}
      title={`Server Kartu Pasien ${index + 1}`}
      description={`Terakhir Online ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      onPress={() => props.navigation.navigate('viewtcard',{serverid: index})}
    />
  );
  
  return (
      <Layout>
         <TopNavigation
        style={styles.navigation}
        title="List Server Online"
        accessoryLeft={renderBackAction}
      />
        <TabView
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Tab title="DB Tcard">
            <Layout>
              <Divider />
              {/* <List
                title="T-CARD"
                style={styles.container}
                data={data}
                renderItem={renderItemTest}
              /> */}
              <ListViewRender data={data}/>
            </Layout>
          </Tab>
          <Tab title="DB Kartu Pasien">
            <Layout>
              <Divider />
              <List
                title="KARTU PASIEN"
                style={styles.container}
                data={data}
                renderItem={renderItem}
              />
            </Layout>
          </Tab>
        </TabView>
        <NavbarBottom/>
      </Layout>
     
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 500,
    minHeight: '75%',
  },
  navigation: {
    marginTop: 18,
  },
});

export default connect()(Home);
