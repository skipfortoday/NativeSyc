import React from "react";
import { connect } from "react-redux";
import { ListItem,Icon, List } from "@ui-kitten/components";
import { View, Text,StyleSheet } from 'react-native';

const renderItemAccessory = (props) => <Icon {...props} name="wifi-outline" />;
const renderItemIcon = (props) => <Icon {...props} name="hard-drive-outline" />;


export default ListViewRender =(props) => {
    return(
        <List
        title="T-CARD"
        style={styles.container}
        data={props.data}
        renderItem={() => {
            return(
                <View>
                    <Text>Test</Text>
                </View>
            )
        }}
        />
    )
}



const renderItemTest = ({index,props}) => (
    <ListItem
      index={index}
      title="tes"
    //   title={`Server Tcard ${index + 1}`}
      description={`Terakhir Online ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
      onPress={() => props.navigation.navigate('viewtcard',{serverid: index})}
    />
);

// const ListViewRender = ({ index }) => (
//   <ListItem
//     index={index}
//     title={`Server Tcard ${index + 1}`}
//     description={`Terakhir Online ${index + 1}`}
//     accessoryLeft={renderItemIcon}
//     accessoryRight={renderItemAccessory}
//     onPress={() => props.navigation.navigate("viewtcard", { serverid: index })}
//   />
// );
const styles = StyleSheet.create({
    container: {
      maxHeight: 500,
      minHeight: '75%',
    },
  });
// export default connect()(ListViewRender);
