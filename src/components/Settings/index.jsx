import React from "react";
import { connect } from "react-redux";
import { Tooltip } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { toggleSettingPanel } from "@/store/actions";
import settingStyles from "./setting.module.less";
const Settings = (props) => {
  const { toggleSettingPanel } = props;
  return (
    <div className={settingStyles.settingsContainer}>
      <Tooltip placement="bottom" title="系统设置">
      <SettingOutlined onClick={toggleSettingPanel}/>
      </Tooltip>
    </div>
  );
};

export default connect(null, { toggleSettingPanel })(Settings);
