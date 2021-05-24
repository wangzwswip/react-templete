import React from "react";
import logo from "@/assets/images/logo.svg";
import logoStyles from  "./logo.module.less";
const Logo = () => {
  return (
    <div className={logoStyles.sidebarLogoContainer}>
      <img src={logo} className={logoStyles.sidebarLogo} alt="logo" />
      <h1 className={logoStyles.sidebarTitle}>示例模板</h1>
    </div>
  );
};

export default Logo;
