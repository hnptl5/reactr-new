import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { completeRegistration } from "../../../redux/actions/registrationAction";


const SignUpCont = (props) => {

  const q1Options = [
    { value: "", label: "Select Your Industry", selected : false},
    { value: "Food Service/Catering", label: "Food Service/Catering", selected : false},
    { value: "Information Technology", label: "Information Technology", selected : false},
    { value: "Business", label: "Business", selected : false},
  ];

  const q2Options = [
    { value: "", label: "Select City and State", selected : false},
    { value: "Medford, Massachusetts", label: "Medford, Massachusetts", selected : false},
    { value: "Denver, Colorado", label: "Denver, Colorado", selected : false},
    { value: "Phoenix, Arizona", label: "Phoenix, Arizona", selected : false},
  ];

  const q3Options = [
    { value: "", label: "Select number of years", selected : false},
    { value: "1", label: "1 Year", selected : false},
    { value: "2", label: "2 Years", selected : true},
    { value: "3", label: "3 Years", selected : false},
  ];

  const q4Options = [
    { value: "", label: "Select number of employees", selected : false},
    { value: "1", label: "1 Employee", selected : false},
    { value: "2", label: "2 Employees", selected : true},
    { value: "3", label: "3 Employees", selected : false},
  ];


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      let data = props.signupData;
      let address = form.elements[1].value.split(", ");
      data.organization = {
        name: data.organization.name,
        yearFounded: form.elements[2].value,
        numberOfEmployees: form.elements[3].value,
        industryCode: form.elements[0].value,
        locations: {
          primary: {
            address: {
              city: address[0],
              state: address[1]
            }
          }
        }
      };
      const { history, completeRegistration } = props;
      completeRegistration(data, history);
    }
  };

  const [validated, setValidated] = React.useState(false);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row className="px-md-8 pt-4 px-sm-0">
        <Col xs={1} className="pt-3">
          <Link to="/signup">
            <i className="fas fa-angle-left fa-2x pl-4 ml-3 arrow-black"></i>
          </Link>
        </Col>

        <Col xs={10} lg={9} className="pt-3 text-center">
          <h3>
            <b>Tell us more about your business.</b>
          </h3>
        </Col>

        <Col xs={1} className="text-right pt-3">
          <i className="fas fa-bell fa-lg"></i>
        </Col>
      </Form.Row>
      <Form.Row className="px-md-8 pb-5 px-sm-0">
        <Col xs={11} lg={10} className=" pt-3 ml-5 text-center">
          <h4>
            This will help us personalize your Gateway experience and provide
              you with industry benchmarks{" "}
          </h4>
        </Col>
      </Form.Row>

      <Form.Row>
        <Form.Group
          as={Col}
          controlId="validationIndustrySelect"
          className="pl-5"
          md={6}
          style={{ padding: 30 }}
        >
          <h4>What industry are you in?</h4>
          <Form.Control as="select" size="lg" required>
            {q1Options.map((option, index) => {
              return (
                <option key={index + 1} value={option.value} selected={option.selected}>
                  {option.label}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please Select an Industry.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          controlId="validationCityStateSelect"
          md={6}
          style={{ padding: 30 }}
        >
          <h4> What city and state are you located in? </h4>
          <Form.Control as="select" size="lg" required>
            {q2Options.map((option, index) => {
              return (
                <option key={index + 1} value={option.value} selected={option.selected}>
                  {option.label}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please Select City/State.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group
          as={Col}
          controlId="validationYearsSelect"
          className="pl-5"
          md={6}
          style={{ padding: 30 }}
        >
          <h4> How many years have you been in business?</h4>
          <Form.Control as="select" size="lg" required>
            {q3Options.map((option, index) => {
              return (
                <option key={index + 1} value={option.value} selected={option.selected}>
                  {option.label}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please Select years of business.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="validationEmployeesSelect"
          md={6}
          style={{ padding: 30 }}
        >
          <h4> How many employees do you have?</h4>
          <Form.Control as="select" size="lg" required>
            {q4Options.map((option, index) => {
              return (
                <option key={index + 1} value={option.value} selected={option.selected}>
                  {option.label}
                </option>
              );
            })}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please Select number of employees.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Col lg={11} className="pt-5 pl-5 ml-5 text-center">
          <Button type="submit" size="lg" className="w-25">
            Sign Up
            </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

SignUpCont.prototypes = {
  signupData: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      contactInformation: PropTypes.shape({
        email: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired
      })
    }),
    organization: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired
};

const mapStateToProps = state => {
  return {
    signupData: state.registrationReducer.signupData
  };
};

export default connect(
  mapStateToProps,
  { completeRegistration }
)(withRouter(SignUpCont));
