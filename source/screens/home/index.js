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
  const data = new Array(8).fill({
    title: "Title for Item",
    description: "Description for Item",
  });
  return (
    <Layout>
      <NavbarTop />
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="DB Tcard">
          <Layout>
            <Divider />
            <ListViewRender data={data} link={props} />
          </Layout>
        </Tab>
        <Tab title="DB Kartu Pasien">
          <Layout>
            <Divider />
            <ListViewRender data={data} link={props} />
          </Layout>
        </Tab>
      </TabView>
      <NavbarBottom />
    </Layout>
  );
};

export default connect(mapStateToProps, null)(Home);
