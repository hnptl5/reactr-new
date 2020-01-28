import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";
import Image from "react-bootstrap/Image";
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "../../../react-auth0-spa";

let data = [
  { progress: 12.5, value: 200, color: "#bcbcbc" },
  { progress: 25, value: 200, color: "#bcbcbc" },
  { progress: 37.5, value: 200, color: "#bcbcbc" },
  { progress: 50, value: 200, color: "#bcbcbc" },
  { progress: 62.5, value: 200, color: "#bcbcbc" },
  { progress: 75, value: 200, color: "#bcbcbc" },
  { progress: 87.5, value: 200, color: "#bcbcbc" },
  { progress: 100, value: 200, color: "#bcbcbc" }
];

const ProfileImage = props => {
  return (
    <Image alt="me" src={props.photo} className="profile ml-5 mt-1" roundedCircle />
  );
};

const UserContainer = props => {
  const { logout } = useAuth0();
 
  let profileCompletePercentage = 50;
  let index = 0;

  const { isAuthenticated } = useAuth0();
  const handleLogOut = event => {
    logout({returnTo: window.location.origin});
    localStorage.clear();
  };

  while (
    index < data.length &&
    data[index].progress <= profileCompletePercentage
  ) {
    data[index].color = "#00C49F";
    index++;
  }

  // debugger;
  return (
    <Container>
      <Row>
        <Col sm={"auto"} lg={"auto"}>
          <PieChart width={150} height={150} className="pt-5 pl-2">
            <Pie
              cx={67}
              data={data}
              dataKey="value"
              startAngle={200}
              endAngle={-20}
              innerRadius={40}
              outerRadius={43}
              fill="#8884d8"
              paddingAngle={5}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={index + 1} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          <ProfileImage photo={props.user.picture} />
          <h4 className="profile-name text-center ml-3">
            {" "}
            {props.user.nickname}
          </h4>
          {isAuthenticated && (
            <div className="text-center">
              <Button onClick={handleLogOut}>Sign out</Button>
            </div>
          )}
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};


UserContainer.propTypes = {
    user: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    })
}

export default withRouter(UserContainer);
