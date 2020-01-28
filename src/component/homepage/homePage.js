import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { SubLevelLeftImage, SubLevelRightImage } from "./subLevel";
import ClientSection from "./clientSection";
import StartDay from "./startDay";
import Footer from "./footer";
import { useAuth0 } from "../../react-auth0-spa";
import "./home.scss";

const homepageData = [
  {
    heading: "Gateway is a digital first portal for small business owners",
    text:
      "Gateway streamlines your financial needs so that you focus on running and growing your businesses",
    image: "localImage.PNG",
    buttonState: true
  },
  {
    heading: "Aggregate your business financial accounts",
    text:
      "We know you manage your money in multiple places. Instead of checking each platform to make sense of your finances, log in once through Gateway",
    image: "localImage2.PNG",
    buttonState: false
  },
  {
    heading: "Visualize your cash flow",
    text:
      "Manually calculating your cash flow can be time consuming. Gateway can provide you with cash flow trends and a simple view of what's flowing in and out",
    image: "localImage3.PNG",
    buttonState: false
  },
  {
    heading: "Compare your business to your peers",
    text:
      "Have you ever wondered how other businesses in your industry are performing? View average revenues, expenses and salaries of like businesses in your area",
    image: "localImage4.PNG",
    buttonState: false
  }
];
const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Container>
        <div className="pt-lg-4">
          <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
              <Image fluid alt="Progress bar" src="logo.PNG" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">
                  <h5>Product</h5>
                </Nav.Link>
                <Nav.Link href="#">
                  <h5>Pricing</h5>
                </Nav.Link>
                <Nav.Link href="#">
                  <h5>Contact</h5>
                </Nav.Link>
                <Nav.Link onClick={() => loginWithRedirect({})}>
                  <h5>Sign In</h5>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <SubLevelRightImage
            heading={homepageData[0].heading}
            text={homepageData[0].text}
            image={homepageData[0].image}
            buttonState={homepageData[0].buttonState}
          />
        </div>

        <div className="py-md-3 py-lg-5">
          <SubLevelLeftImage
            heading={homepageData[1].heading}
            text={homepageData[1].text}
            image={homepageData[1].image}
            buttonState={homepageData[1].buttonState}
            step={"01"}
          />
        </div>
        <div className="py-md-3 py-lg-5">
          <SubLevelRightImage
            heading={homepageData[2].heading}
            text={homepageData[2].text}
            image={homepageData[2].image}
            buttonState={homepageData[2].buttonState}
            step={"02"}
          />
        </div>
        <div className="py-md-3 py-lg-5">
          <SubLevelLeftImage
            heading={homepageData[3].heading}
            text={homepageData[3].text}
            image={homepageData[3].image}
            buttonState={homepageData[3].buttonState}
            step={"03"}
          />
        </div>
        <div className="py-md-3 py-lg-5">
          <ClientSection />
        </div>
      </Container>
      <div>
        <StartDay />
      </div>
      <div className="footerClass">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
