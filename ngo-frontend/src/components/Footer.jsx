import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import instagram_logo from "../assets/instagram_logo.jpg";
import linkedIn_logo from "../assets/linkedIn_logo.jpg";
import youtube_logo from "../assets/youtube_logo.jpg";

export function Footer() {
  return (
    <footer>
      <Container className="footer-box mt-5">
        <Row>
          <Col>
            <p>Explore</p>
            <ul className="footer-list">
              <li>Help by donations</li>
              <li>Fields</li>
              <li>Awards</li>
              <li>About Us</li>
            </ul>
          </Col>

          <Col>
            <ul className="footer-list">
              <li>Email: ngo@gmail.com</li>
              <li>
                <p>Address:</p>
                <p>
                  2nd Floor,
                  <br />
                  Tulip Tower,
                  <br />
                  Harvard Street,
                  <br />
                  Boston park,
                  <br />
                  London
                </p>
              </li>
            </ul>
          </Col>

          <Col>
            <p>Connect us on:</p>
            <ul className="footer-list flex-row">
              <li>
                <a href="https://www.linkedin.com/">
                  <img
                    className="footer-logo"
                    src={linkedIn_logo}
                    alt="linkedIn logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <img
                    className="footer-logo"
                    src={youtube_logo}
                    alt="youtube logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/?hl=en">
                  <img
                    className="footer-logo"
                    src={instagram_logo}
                    alt="instagram logo"
                  />
                </a>
              </li>
            </ul>
          </Col>

          <Col>
                <iframe 
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158958.73968813452!2d-0.6437764054687953!3d51.499816400000036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d719058732f%3A0x4163d35b276ee8cc!2sBoston%20Business%20Park!5e0!3m2!1sen!2sin!4v1761244609041!5m2!1sen!2sin" 
                    title="location of ngo" 
                    width="100%" 
                    height="500px"
                    allowFullScreen // Optional: allow fullscreen mode
                ></iframe>
                </Col>
        </Row>
      </Container>
    </footer>
  );
}
