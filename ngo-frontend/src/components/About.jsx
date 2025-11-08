import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import card_1 from "../assets/card_1.webp";
import card_2 from "../assets/card_2.jpeg";
import card_3 from "../assets/card_3.webp";
import card_4 from "../assets/card_4.jpg";
import profile_pic1 from "../assets/prathamesh.jpg";
import profile_pic2 from "../assets/user1_profile.jpg";
import profile_pic3 from "../assets/user2_profile.jpg";

export function About() {
  return (
    <Container className="mt-4 comfortaa">
      <Row className="justify-content">
        <Row>
          <Col>
            <Container className="user-box font font15">
              <Container>
                <img
                  className="user-profile-img"
                  src={profile_pic1}
                  alt="user1"
                />
              </Container>

              <p className="profile-para">
                I am Prathamesh Maharnur, currently pursuing a Postgraduate
                Diploma in Advanced Computing from CDAC Kharghar. I have
                completed my B.E. from Mumbai University with an aggregate
                pointer of 8.61. I completed my 12th from the Maharashtra State
                Board with 85.5% and my 10th from the same board with 87.40%.
                During my final year, I worked on a major project titled
                "Encrypted Chats using Steganography," which aims to establish a
                secure communication channel for spies. My contribution focused
                on research and the implementation of the LSB algorithm for data
                compression. Talking about my technical skills, I am proficient
                in Java, Data Structures and Algorithms, Operating Systems, and
                Database Technologies.
              </p>
            </Container>
          </Col>

          <Col>
            <Container className="user-box font font15">
              <Container>
                <img
                  className="user-profile-img"
                  src={profile_pic2}
                  alt="user2"
                />
              </Container>

              <p className="profile-para">
                I am Anurag More, currently pursuing a Postgraduate
                Diploma in Advanced Computing from CDAC Kharghar. I have
                completed my B.E. from Mumbai University with an aggregate
                pointer of 8.61. I completed my 12th from the Maharashtra State
                Board with 85.5% and my 10th from the same board with 87.40%.
                During my final year, I worked on a major project titled
                "Encrypted Chats using Steganography," which aims to establish a
                secure communication channel for spies. My contribution focused
                on research and the implementation of the LSB algorithm for data
                compression. Talking about my technical skills, I am proficient
                in Java, Data Structures and Algorithms, Operating Systems, and
                Database Technologies.
              </p>
            </Container>
          </Col>

          <Col>
            <Container className="user-box font font15">
              <Container>
                <img
                  className="user-profile-img"
                  src={profile_pic3}
                  alt="user3"
                />
              </Container>

              <p className="profile-para">
                I am Dhanajay Shitole, currently pursuing a Postgraduate
                Diploma in Advanced Computing from CDAC Kharghar. I have
                completed my B.E. from Mumbai University with an aggregate
                pointer of 8.61. I completed my 12th from the Maharashtra State
                Board with 85.5% and my 10th from the same board with 87.40%.
                During my final year, I worked on a major project titled
                "Encrypted Chats using Steganography," which aims to establish a
                secure communication channel for spies. My contribution focused
                on research and the implementation of the LSB algorithm for data
                compression. Talking about my technical skills, I am proficient
                in Java, Data Structures and Algorithms, Operating Systems, and
                Database Technologies.
              </p>
            </Container>
          </Col>
        </Row>
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
                <Card.Title className="text-success">
                  Women Empowerment
                </Card.Title>
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
                <Card.Title className="text-success">
                  No child labour
                </Card.Title>
                <Card.Text>Childhood is for dreams, not for labour.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} className="mt-3">
              <Card.Img variant="top" src={card_3} />
              <Card.Body>
                <Card.Title className="text-success">
                  Disaster Relief
                </Card.Title>
                <Card.Text>Helping hands bring healing hearts.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }} className="mt-3">
              <Card.Img variant="top" src={card_4} />
              <Card.Body>
                <Card.Title className="text-success">
                  Environmental Protection
                </Card.Title>
                <Card.Text>Small acts, big impact — save the Earth.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    <hr />
      <Container className="comapany-background font">
        <Container className="company-heading">
            <h3 className="font-color-green  mt-5">Achievements:</h3>
        </Container>
        <Container className="company-para mt-3">
            <p>Pellentesque a pellentesque eros. Pellentesque bibendum justo a lorem blandit blandit. Vestibulum
                finibus ipsum erat, sit amet lobortis mauris ullamcorper quis. Ut facilisis nunc in odio pretium
                porttitor. Praesent tempor leo purus, sit amet convallis enim condimentum vel. Fusce nec ipsum sit
                amet augue molestie cursus. Aenean sapien est, faucibus eu pharetra non, dictum vitae lectus. Cras
                sed ultricies tellus, ut semper ex. Aliquam vel blandit odio.</p>
        </Container>
    </Container>
    </Container>
  );
}
