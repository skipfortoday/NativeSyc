import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Button, Divider, Icon, List, ListItem, TopNavigation, TopNavigationAction, Tab,
    Layout, TabView, Text, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};


const SettingsIcon = (props) => (
  <Icon {...props} name='settings'/>
);

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

export const viewtcard = (props) => {
  const bottomState = useBottomNavigationState();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const renderSettingsAction = () => (
    <TopNavigationAction icon={SettingsIcon}/>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={HomeIcon}/>
  );

  const renderItemAccessory = (props) => (
    <Button size='tiny'>Online</Button>
  );

  const renderItemIcon = (props) => (
    <Icon {...props} name='hard-drive-outline'/>
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`Server ${index + 1}`}
      description={`Terakhir Online ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      onPress={() => console.log(props)}
    />
  );

  return (
    <React.Fragment>
      <TopNavigation
        style={styles.navigation}
        title='List data table Tcard'
        accessoryLeft={renderBackAction}
        accessoryRight={renderSettingsAction}
      />
      <TabView
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Tab title='Hari Ini'>
        <Layout>
        <Divider/>
        <List
        style={styles.container}
        data={data}
        renderItem={renderItem}/>
        </Layout>
      </Tab>
      <Tab title='All Data'>
        <Layout>
        <Divider/>
        <List
        style={styles.container}
        data={data}
        renderItem={renderItem}/>
       </Layout>
      </Tab>
    </TabView>
    {/* <BottomNavigation style={styles.bottomNavigation} {...bottomState} onSelect={() => props.navigation.navigate('Home')}>
       <BottomNavigationTab
        icon={renderItemIcon}
        />
      </BottomNavigation> */}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    // maxHeight: 500,
  },
  navigation: 
  {
    marginTop: 20,
  },
  bottomNavigation: {
    marginVertical: 8,
  },
});
export default connect()(viewtcard);