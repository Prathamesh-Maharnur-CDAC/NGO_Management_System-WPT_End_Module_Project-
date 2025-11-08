import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { donateMoney } from "../services/donateService";
import Swal from "sweetalert2";
import Container from "react-bootstrap/esm/Container";

export function Donate() {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    amount: "",
    payment_method: "",
    terms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (event) => {
    try {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        console.log(formData);
        const response = await donateMoney(formData);

        const data = await response.json();
        console.log("Server reponse: ", data);
        // alert("Thank you for donations");

        Swal.fire({
          title: "Donation Successful 🎉",
          text: "Thank you for your generous support!",
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
        Donate for better tommorrow
      </h3>
      <Form
        className="login-container comfortaa font-slight-bold"
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
            isInvalid={validated && !/^[a-zA-Z ]+$]+$/.test(formData.name)}
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
          <Form.Label>Occupation</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            name="occupation"
            required
            value={formData.occupation}
            isInvalid={
              validated &&
              (formData.occupation === "" ||
                formData.occupation === "select occupation")
            }
          >
            <option value="">select occupation</option>
            <option value="Government service">Government service</option>
            <option value="Private service">Private service</option>
            <option value="Business">Business</option>
            <option value="Retired">Retired</option>
            <option value="Farmer">Farmer</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount(Rs.)</Form.Label>
          <Form.Control
            type="numeric"
            placeholder="Enter amount"
            required
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payment method</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="payment_method"
            required
            onChange={handleChange}
            value={formData.payment_method}
            isInvalid={
              validated &&
              (formData.payment_method === "" ||
                formData.payment_method === "select payment method")
            }
          >
            <option value="">select payment method</option>
            <option value="credit card">credit card</option>
            <option value="debit card">debit card</option>
            <option value="UPI">UPI</option>
          </Form.Select>
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}

        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
          <Form.Check
            type="checkbox"
            label="I ensure after transaction I am not eligble to ask for refund"
            name="terms"
            required
            onChange={handleChange}
            checked={formData.terms}
            isInvalid={validated && !formData.terms}
            feedback="Check to proceed."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Donate;
