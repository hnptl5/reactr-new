import React from "react";
import LeftNavComponent from "./LeftNavComponent";
import UserContainer from "./UserContainer";
import { useAuth0 } from "../../../react-auth0-spa";

const LeftNavContainer = () => {
  const { user } = useAuth0();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <UserContainer user={user} />
          <LeftNavComponent />
        </div>
      </div>
    </div>
  );
};

export default LeftNavContainer;
