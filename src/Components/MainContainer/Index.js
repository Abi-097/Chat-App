import React from "react";
import "./Style.css";
import Sidebar from "../Sidebar/Index";
import WorkArea from "../Workarea/Index";
const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <WorkArea />
    </div>
  );
};

export default MainContainer;
