import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import CardDeck from "react-bootstrap/CardDeck";

const clientInfo = [
  {
    id: 0,
    image: "user1.PNG",
    name: "ALLISON GREEN",
    role: "Optometrist",
    feedback: `"I consider Gateway my personal assistant. It's like having an extra pair of eyes on my accounting"`
  },
  {
    id: 1,
    image: "user2.PNG",
    name: "MARCUS ADLER",
    role: "Reatialer",
    feedback: `"I start my day with Gateway. It gives me insight into how well my business is doing on a daily basis."`
  },
  {
    id: 2,
    image: "user3.PNG",
    name: "TIFFANY YOUNG",
    role: "Violin Maker",
    feedback: `"Gateway allows me to focus on the reason I started my business in the first place"`
  }
];

const ClientSection = () => {
  return (
    <Container>
      <Card className="pt-4 border-0 text-center">
        <p className="display-4">What our clients have to say</p>
        <div className="h5 py-3 mb-3 text-gray text-center">
          Gateway has provided businesses all over the country with invaluable
          insights, which have <br className="d-none d-md-block" /> saved them
          countless hours on manual tasks.
        </div>
      </Card>

      <Carousel defaultActiveIndex={0} className="d-block d-md-none">
        {clientInfo.map(client => (
          <Carousel.Item
            key={client.id}
            className="rounded-0 bg-white border text-center py-3 shadow"
          >
            <img
              className="mx-auto"
              alt={client.name}
              src={client.image}
              style={{ width: "100px", height: "100px" }}
            />
            <Carousel.Caption className="pt-1" style={{ position: "initial" }}>
              <h4 className="text-black px-2">{client.name}</h4>
              <h5 className="mb-2 text-muted  px-2">{client.role}</h5>
              <p className=" px-2 mb-0" style={{ color: "#333333" }}>
                {client.feedback}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <CardDeck className="d-none d-md-flex">
        {clientInfo.map(client => (
          <Card key={client.id} className="text-center py-5 shadow rounded-0">
            <Card.Body>
              <Card.Img
                className=" mx-auto"
                src={client.image}
                style={{ width: "100px", height: "100px" }}
              />
              <Card.Title>{client.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {client.role}
              </Card.Subtitle>
              <Card.Text>{client.feedback}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
};

export default ClientSection;
