import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { fillApplicationForm } from "../services/applyService";
import Swal from "sweetalert2";
import Container from "react-bootstrap/esm/Container";

export function Apply() {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
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
      }else {
        console.log(formData);
        const response = await fillApplicationForm(formData);

        const data = await response.json();
        console.log("Server reponse: ", data);

        Swal.fire({
          title: "Applied Successfully 🎉",
          text: "Your application is successful!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#28a745", // green button
          background: "#f0fff4", // light green background
        });
      }
      setValidated(true);
    } catch (error) {}
  };

  return (
    <Container>
      <h3 className="comfortaa font35 mt-5 text-center font-color-green">
        Be a reason for someone's smile
      </h3>
      <Form
        className="comfortaa font-slight-bold small-login-container"
        noValidate
        onSubmit={handleSubmit}
        validated={validated}
      >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            pattern="^[a-zA-Z ]+$"
            required
            isInvalid={validated && !/^[a-zA-Z ]+$/.test(formData.name)}
            placeholder="Enter name"
            onChange={handleChange}
          />
        </Form.Group>

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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            inputMode="numeric"
            name="phone"
            pattern="^\d{10}$"
            value={formData.phone}
            isInvalid={validated && !/^\d{10}$/.test(formData.phone)}
            placeholder="Enter phone"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            pattern="^\\d{4}-\\d{2}-\\d{2}$"
            value={formData.dob}
            isInvalid={validated && !/^\d{4}-\d{2}-\d{2}$/.test(formData.dob)}
            placeholder="Enter Date of Birth"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
