import React from "react";
import LeftNavContainer from "../../component/common/left-nav/LeftNavContainer";

import "./Sidebar.scss";

const SidebarComponent = props => {
  return (
    <>
      <div
        className={"overlay " + (props.show ? "active" : "")}
        onClick={props.closeHandler}
      ></div>
      <nav id="sidebar" className={"autoHide" + (props.show ? "active" : "")}>
        <button
          id="dismiss"
          onClick={props.closeHandler}
          type="button"
          className="btn btn-success"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <LeftNavContainer />
      </nav>
    </>
  );
};

export default SidebarComponent;
