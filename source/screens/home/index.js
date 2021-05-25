import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Divider, Tab, Layout, TabView } from "@ui-kitten/components";
import NavbarBottom from "../../components/NavbarBottom";
import ListViewRender from "../../components/ListViewRender";
import NavbarTop from "../../components/NavbarTop";
import { getDataUser } from "../../actions/app";

const mapStateToProps = (state) => {
  return {
    getDataUser: state.app.getDataUser,
  };
};

const Home = (props) => {
  useEffect(() => {
    if(!props.getDataUser){
      props.dispatch(getDataUser())
    }
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Layout>
      <NavbarTop link={props}/>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="DB Tcard">
          <Layout>
            <Divider />
            <ListViewRender data={props.getDataUser} link={props} tittle='name' desc='username'  />
          </Layout>
        </Tab>
        <Tab title="DB Kartu Pasien">
          <Layout>
            <Divider />
            <ListViewRender data={props.getDataUser} link={props} tittle='id' desc='email' />
          </Layout>
        </Tab>
      </TabView>
      <NavbarBottom link={props}/>
    </Layout>
  );
};

export default connect(mapStateToProps, null)(Home);
