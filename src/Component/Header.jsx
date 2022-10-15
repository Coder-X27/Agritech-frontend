import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../images/Logo.png";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="#288b52"
      burgerColor="#288b52"
      burgerColorHover="orange"
      logo={logo}
      logoWidth="400px"
      logoHoverColor="white"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="Weather"
      link3Text="About"
      link4Text="DataAnalysis"
      link1Url="/"
      link2Url="/weather"
      link3Url="/about"
      link4Url="/dataanalysis"
      link1ColorHover="orange"
      link1Color="white"
      link1Size="1.2vmax"
      link1Padding="3vmax"
      profileIcon={true}
      profileIconUrl='/login'
      ProfileIconElement={FaUserAlt}
      profileIconColor="white"
      profileIconColorHover="orange"
    />
  );
};

export default Header;
