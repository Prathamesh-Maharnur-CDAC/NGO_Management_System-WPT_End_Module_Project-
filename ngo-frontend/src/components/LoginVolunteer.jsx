import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Swal from "sweetalert2";
import Container from "react-bootstrap/esm/Container";
import { volunteerLogin } from "../services/volunteerService";
import { useNavigate } from "react-router-dom";


export function LoginVolunteer() {
const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    try {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        console.log(formData);
        const data = await volunteerLogin(formData);
        console.log("Server reponse: ", data.message);

        if (data.message === "Login successful") {
          Swal.fire({
            title: "Login Successful 🎉",
            text: "Welcome back, Volunteer!!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#28a745", // green button
            background: "#f0fff4", // light green background
          }).then(() => {
            navigate("/VolunteerDashBoard");
          });
        }
      }
      setValidated(true);
    } catch (error) {}
  };

  return (
    <Container>
      <h3 className="comfortaa font35 mt-5 text-center font-color-green">
        Volunteer Login
      </h3>

      <Form
        className="comfortaa font-slight-bold small-small-login-container"
        noValidate
        onSubmit={handleSubmit}
        validated={validated}
      >
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            pattern="^\S+@\S+\.\S+$"
            required
            isInvalid={validated && !/^\S+@\S+\.\S+$/.test(formData.email)}
            placeholder="Enter email"
            onChange={handleChange}
          />

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              required
              isInvalid={validated}
              placeholder="Enter password"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
