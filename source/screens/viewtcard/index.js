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



const viewtcard = (props) => {
  useEffect(() => {
    console.log(props.navigation)
  });
  
  return (
    <Layout>
      <NavbarTop link={props}/>
      <Button onPress={()=>
        props.navigation.navigate('KartuPasien')
      }></Button>
      <NavbarBottom link={props}/>
    </Layout>
  );
};

export default connect(mapStateToProps, null)(viewtcard);
