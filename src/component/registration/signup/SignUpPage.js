import React, { useState } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, withRouter } from "react-router-dom";
import { proceedWithSignupInfo } from "../../../redux/actions/registrationAction";
import { useAuth0 } from "../../../react-auth0-spa";

const SignUpPage = props => {
  const { loginWithRedirect } = useAuth0();
  const [validated, setValidated] = useState(false);
  const {signupData : {user, organization}} = props;
  const [userData, setUserDate] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    businessName: organization.name,
    email: user.contactInformation.email,
    phoneNumber: user.contactInformation.phoneNumber,
    password: user.password
  })

  const handleInputChange = event => {
    const {name, value} = event.target;
    setUserDate({...userData, [name] : value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      //Process to Organization Page
      let data = {
        user: {
          firstName: form.elements[1].value,
          lastName: form.elements[2].value,
          contactInformation: {
            email: form.elements[4].value,
            phoneNumber: form.elements[3].value
          },
          password: form.elements[5].value
        },
        organization: {
          name: form.elements[0].value
        }
      };

      props.proceedWithSignupInfo(data, props.history);
    }
  };

  return (
    <>
      <Jumbotron style={{ background: "transparent" }}>
        <Container className="text-center">
          <h5>
            <span className="font-weight-bold"> Step 1 </span> of 3
          </h5>
          <div className="pt-3">
          <Image 
              fluid alt="Progress bar" 
              src="progress_bar1.png" 
              className= "progress-bar"
              />   
          </div>
          <div className=" pt-3 text-center">
            <h3 className="font-weight-bold">Nice to meet you!</h3>
            <h4> Let's get to know each other a little bit better </h4>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row className="py-3">
              <Form.Group
                as={Col}
                xs="12"
                sm="12"
                md="4"
                controlId="validationCustomBusinessName"
              >
                <Form.Control name="businessName" value={userData.businessName} size="lg" required placeholder="Business Name" onChange={handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                  Please enter a business name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                xs="12"
                sm="12"
                md="4"
                controlId="validationCustomFirstName"
              >
                <Form.Control name="firstName" value={userData.firstName} size="lg" required placeholder="First name" onChange={handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                  Please enter a First Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                xs="12"
                sm="12"
                md="4"
                controlId="validationCustomLastName"
              >
                <Form.Control name="lastName" value={userData.lastName} size="lg" required placeholder="Last name" onChange={handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                  Please enter a Last Name.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group
                as={Col}
                xs="12"
                sm="12"
                md="4"
                controlId="validationCustomPhone"
              >
                <Form.Control name="phoneNumber" value={userData.phoneNumber} size="lg" required placeholder="Phone Number" onChange={handleInputChange}/>
                <Form.Control.Feedback type="invalid">
                  Please enter a Phone number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                xs="12"
                sm="12"
                md="4"
                controlId="validationCustomEmail"
              >
                <Form.Control
                  name="email"
                  value={userData.email}
                  size="lg"
                  xs="12"
                  sm="12"
                  md="4"
                  required
                  type="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                xs="12"
                sm="12"
                md="4"
                controlId="validationCustomPassword"
              >
                <Form.Control
                  name="password"
                  value={userData.password}
                  size="lg"
                  required
                  type="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a Password.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Row>
              <Col className="pt-5 mt-5">
                <Button type="submit" size="lg" className="w-25">
                  Continue
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className="pt-3">
            <Col>
              <h5>
                Already have an account?{" "}
                <Link to="" onClick={() => loginWithRedirect({})}>
                  <u>Log-in</u>
                </Link>
              </h5>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

const mapStateToProps = state => {
  return {
    signupData: state.registrationReducer.signupData
  };
};

export default connect(
  mapStateToProps,
  { proceedWithSignupInfo }
)(withRouter(SignUpPage));
