import React from "react";
import { ListItem,Icon, List } from "@ui-kitten/components";
import { StyleSheet } from 'react-native';

const renderItemAccessory = (props) => <Icon {...props} name="wifi-outline" />;
const renderItemIcon = (props) => <Icon {...props} name="hard-drive-outline" />;


export default ListViewRender =(props) => {
    return(
        <List
        title="T-CARD"
        style={styles.container}
        data={props.data}
        renderItem={(index) => {
            return(
              <ListItem
              title="tes"
              description={`Terakhir Online ${index.index + 1}`}
              accessoryLeft={renderItemIcon}
              accessoryRight={renderItemAccessory}
              onPress={() => props.link.navigation.navigate('viewtcard',{serverid: index})}
            />
            )
        }}
        />
    )
}
const styles = StyleSheet.create({
    container: {
      maxHeight: 500,
      minHeight: '75%',
    },
  });

