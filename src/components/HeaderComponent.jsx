import React, { useState, memo } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { getActiveTabIndex } from "../Helpers/utils";

const Header = ({ brandName, tabData }) => {
  const location = useLocation();
  const pathname = location?.pathname;

  let defaultActiveTab = getActiveTabIndex(tabData, pathname);
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <AppBar sx={{ background: "#C6426E" }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            marginTop:"1rem",
            fontFamily: "'Zeyada', cursive",
            color: "#2F0743",
            fontSize:"50px"
          }}
        >
          {brandName}
        </Typography>
        <Tabs
          sx={{ marginLeft: "auto" }}
          value={activeTab}
          onChange={(e, tabIndex) => setActiveTab(tabIndex)}
        >
          {tabData &&
            tabData.map((tab) => {
              return (
                <Tab
                  key={`tab_${tab.id}`}
                  label={tab?.label}
                  component={Link}
                  to={tab?.path}
                  sx={tab.isActive ? { color: "#41295a" } : { display: "none" }}
                />
              );
            })}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Header);
