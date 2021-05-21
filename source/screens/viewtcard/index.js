import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Button, Divider, Icon, List, ListItem, TopNavigation, TopNavigationAction, Tab,
    Layout, TabView, Text } from '@ui-kitten/components';

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);



const SettingsIcon = (props) => (
  <Icon {...props} name='settings'/>
);

const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

export const viewtcard = () => {
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
  }
});
export default connect()(viewtcard);