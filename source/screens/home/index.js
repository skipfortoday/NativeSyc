import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';
import { Layout, Text } from '@ui-kitten/components';

class Home extends Component {
  componentDidMount() {
    const { fetchDataAll } = this.props;
    fetchDataAll()
  }
  render() {
    const { data } = this.props;
    if (data) {
      console.log(data);
    }
    return(
      <Layout>
        <Text>
       mas alio
        </Text>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return{
    data: state.app.data,
  }
}

const mapDispatchToProps = {
  fetchDataAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);