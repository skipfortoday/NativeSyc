import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Layout, Button } from "@ui-kitten/components";
import NavbarBottom from "../../components/NavbarBottom";
import NavbarTop from "../../components/NavbarTop";

const mapStateToProps = (state) => {
  return {
    getDataUser: state.app.getDataUser,
  };
};

const kartupasien = (props) => {
  return (
    <Layout>
      <NavbarTop link={props}/>
      <NavbarBottom link={props}/>
    </Layout>
  );
};

export default connect(mapStateToProps, null)(kartupasien);
