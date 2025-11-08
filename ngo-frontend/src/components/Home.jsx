// import Container from "react-bootstrap/esm/Container";
import home_pic1 from "../assets/home_pic1.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card_1 from "../assets/card_1.webp";
import card_2 from "../assets/card_2.jpeg";
import card_3 from '../assets/card_3.webp';
import card_4 from '../assets/card_4.jpg'




export function Home() {
  return (
    <Container className="mt-4 comfortaa">
      <Row className="justify-content">
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <p className="home-para font30 font-color-green">
            "We make a living by what we get, but we make a life by what we
            give."
            <br />― Winston Churchill
          </p>
        </Col>

        <Col lg={6}>
          <img src={home_pic1} alt="ngo-kids" className="home_pic1" />
        </Col>
      </Row>

      <hr />
      <div>
        <h3 className="padding40 font-color-green">Our background</h3>

        <p className="padding20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam
          leo a volutpat suscipit. Aliquam id volutpat augue. In ut vehicula
          lorem, in lobortis magna. Donec non malesuada ipsum. Aenean ante sem,
          dictum quis ullamcorper ut, varius a sem. In id nulla a odio faucibus
          venenatis sed in libero. Praesent aliquam feugiat mattis. Aenean sit
          amet risus mi. Mauris luctus dignissim massa. Cras vel pretium nibh.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. In eleifend gravida elit, vitae semper velit
          hendrerit ut. Suspendisse gravida tincidunt purus, ac elementum eros
          sagittis in. Pellentesque malesuada sodales arcu eget elementum. Nam
          egestas id enim vitae facilisis. Fusce sollicitudin, nibh ut dapibus
          consequat, felis purus commodo ante, vitae lobortis sapien mauris sed
          metus. Curabitur suscipit tempus elit non viverra. Proin ipsum odio,
          blandit nec consequat sit amet, aliquet sit amet nisi. Donec et ligula
          in risus malesuada pulvinar. Ut sodales aliquet nisl, vitae lobortis
          nunc tempor convallis. Vivamus eleifend eros fringilla tellus rutrum
          hendrerit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Donec malesuada ac ipsum
          scelerisque suscipit. Morbi vel suscipit nulla. Vestibulum pharetra
          leo at varius tempus. Morbi molestie ullamcorper est, in euismod ipsum
          lacinia vel. Donec at neque orci. Nulla eleifend ligula id purus
          euismod rhoncus. Sed at ex ut ligula aliquet egestas. Quisque eu sem
          vitae augue vestibulum interdum quis non sem. Cras egestas efficitur
          sapien efficitur blandit.
        </p>
      </div>

      <hr />

      
        <Container>
            <h3 className="padding20 mt-3 font-color-green">Service to society</h3>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="mt-3">
                <Card.Img variant="top" src={card_1} />
                <Card.Body>
                  <Card.Title className="text-success">Women Empowerment</Card.Title>
                  <Card.Text>
                    Educate a woman, and you educate a generation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "18rem" }} className="mt-3">
                <Card.Img variant="top" src={card_2} />
                <Card.Body>
                  <Card.Title className="text-success">No child labour</Card.Title>
                  <Card.Text>
                    Childhood is for dreams, not for labour.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "18rem" }} className="mt-3">
                <Card.Img variant="top" src={card_3} />
                <Card.Body>
                  <Card.Title className="text-success">Disaster Relief</Card.Title>
                  <Card.Text>
                    Helping hands bring healing hearts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col>
              <Card style={{ width: "18rem" }} className="mt-3">
                <Card.Img variant="top" src={card_4} />
                <Card.Body>
                  <Card.Title className="text-success">Environmental Protection</Card.Title>
                  <Card.Text>
                    Small acts, big impact — save the Earth.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

        
    </Container>
    
  );
}

export default Home;
