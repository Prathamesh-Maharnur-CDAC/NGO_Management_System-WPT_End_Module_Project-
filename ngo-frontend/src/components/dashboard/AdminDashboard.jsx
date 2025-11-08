import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { getAllDonationData } from "../../services/donateService";
import Table from "react-bootstrap/Table";
import {
  getAllVolunteerData,
  updateNameOfVolunteer,
  updatePhoneOfVolunteer,
  updatePasswordOfVolunteer,
  deleteVolunteer as deleteVolunteerAPI,
} from "../../services/volunteerService";
import { getAllApplicantsData } from "../../services/applyService";
import {
  updatePasswordOfAdmin,
  getAllAdminData, addAdminFromVolunteer, getAllCampaignData
} from "../../services/adminService";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function AdminDashBoard() {
  const [donors, setDonors] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();
const [campaigns, setCampaigns] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    func: "",
    phone: "",
    name: "",
    password: "",
    id: "",
  });

  const [addVolunteerData, setAddVolunteerData] = useState({
    appl_id: "",
    joining_date: "",
    c_id: "",
  });

  const [addAdminData, setAddAdminData] = useState({
    admin_name: "",
    email: "",
    phone: "",
    dob: "",
    v_id: "",
    a_password: "",
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddForm2, setShowAddForm2] = useState(false);

  const fetchDonationsData = async () => {
    try {
      setLoading(true);
      const response = await getAllDonationData();
      setDonors(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchVolunteersData = async () => {
    try {
      setLoading(true);
      const response = await getAllVolunteerData();
      setVolunteers(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchApplicantsData = async () => {
    try {
      setLoading(true);
      const response = await getAllApplicantsData();
      setApplicants(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      const response = await getAllAdminData();
      setAdmins(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchCampaignsData = async () =>{
    try {
      setLoading(true);
      const response = await getAllCampaignData();
      setCampaigns(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleButtonClick2 = () => {
    setShowForm2(!showForm2);
  };

  const handleButtonClick3 = () => {
    setShowForm3(!showForm3);
  };

  const updateVolunteer = async (event) => {
    event.preventDefault();
    const { email, func, phone, name, password } = formData;

    if (!email || !func) {
      alert("Email and option must be selected!");
      return;
    }

    let data;
    try {
      if (func === "updateNameOfVolunteer") {
        data = await updateNameOfVolunteer({ email, name });
      } else if (func === "updatePhoneOfVolunteer") {
        data = await updatePhoneOfVolunteer({ email, phone });
      } else if (func === "updatePasswordOfVolunteer") {
        data = await updatePasswordOfVolunteer({ email, password });
      }

      if (data.status === 200) {
        Swal.fire({
          title: "Success 🎉",
          text: data.data.message,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#28a745",
          background: "#f0fff4",
        });
      } else if (data.status === 400) {
        Swal.fire({
          title: "Warning ⚠️",
          text: data.data.message || "Bad Request",
          icon: "warning",
          confirmButtonText: "Retry",
          confirmButtonColor: "#ffc107",
          background: "#fff8e1",
        });
      } else {
        Swal.fire({
          title: "Error ❌",
          text: data.data.message || "Something went wrong!",
          icon: "error",
          confirmButtonText: "Retry",
          confirmButtonColor: "#dc3545",
          background: "#fff0f0",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const deleteVolunteer = async (event) => {
    event.preventDefault();
    const { id } = formData;

    if (!id) {
      Swal.fire({
        title: "Warning ⚠️",
        text: "ID must be entered!",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await deleteVolunteerAPI({ id });

      if (response.status === 200) {
        Swal.fire({
          title: "Deleted ✅",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#28a745",
          background: "#f0fff4",
        });
        setFormData({ ...formData, id: "" }); 
      } else if (response.status === 400) {
        Swal.fire({
          title: "Warning ⚠️",
          text: response.data.message || "Bad Request",
          icon: "warning",
          confirmButtonText: "Retry",
          confirmButtonColor: "#ffc107",
          background: "#fff8e1",
        });
      } else {
        Swal.fire({
          title: "Error ❌",
          text: response.data.message || "Something went wrong!",
          icon: "error",
          confirmButtonText: "Retry",
          confirmButtonColor: "#dc3545",
          background: "#fff0f0",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error ❌",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Retry",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  const updateAdminPassword = async (event) => {
    event.preventDefault();
    const { password } = formData;

    if (!password) {
      Swal.fire({
        title: "Warning ⚠️",
        text: "Password must be entered!",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await updatePasswordOfAdmin({
        email: localStorage.getItem("email"),
        password,
      });

      if (response.status === 200) {
        Swal.fire({
          title: "Success ✅",
          text: "Password updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({ ...formData, password: "" }); 
        setShowForm3(false); 
      } else {
        Swal.fire({
          title: "Error ❌",
          text: response.data.message || "Failed to update password.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error ❌",
        text: "Failed to update password.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAddVolunteer = async (event) => {
    event.preventDefault();

    const { appl_id, joining_date, c_id } = addVolunteerData;
    if (!appl_id || !joining_date || !c_id) {
      Swal.fire("Warning ⚠️", "All fields are required!", "warning");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/addVolunteerFromApplication",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ appl_id, joining_date, c_id }),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        Swal.fire("Success 🎉", data.message, "success");
        setAddVolunteerData({ appl_id: "", joining_date: "", c_id: "" });
        fetchVolunteersData();
      } else {
        Swal.fire(
          "Error ❌",
          data.message || "Failed to add volunteer!",
          "error"
        );
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error ❌", "Something went wrong!", "error");
    }
  };

  const handleAddAdmin = async (event) => {
    event.preventDefault();
    const { v_id } = addAdminData;

    if (!v_id) {
      Swal.fire("⚠️ Warning", "Volunteer ID must be entered!", "warning");
      return;
    }
    console.log("📤 Sending Volunteer ID:", v_id);

    try {
      const data = await addAdminFromVolunteer(v_id);

      if (data.success) {
        Swal.fire("✅ Success", data.message, "success");
        setAddAdminData({ v_id: "" });
        setShowAddForm2(false);
        fetchAdminData();
      } else {
        Swal.fire("❌ Error", data.message || "Failed to add admin.", "error");
      }
    } catch (error) {
      Swal.fire(
        "❌ Error",
        "Something went wrong while adding admin.",
        "error"
      );
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const clearDonorTable = () => setDonors([]);
  const clearVolunteerTable = () => setVolunteers([]);
  const clearApplicantTable = () => setApplicants([]);
  const clearAdminTable = () => setAdmins([]);
  const clearCampaignTable = () => setCampaigns([]);

  return (
    <Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-between mt-3 mb-4"
      >
        <h2 className="comfortaa font35 mt-5 text-left font-color-green">
          Admin Dashboard
        </h2>
        <Button
          variant="danger"
          className="ms-3"
          onClick={handleLogout}
          size="lg"
        >
          Logout
        </Button>
      </Container>

      <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Donations">
          <Button
            variant="info"
            disabled={Loading}
            onClick={!Loading ? fetchDonationsData : null}
          >
            {Loading ? "Loading…" : "View Donation data"}
          </Button>

          <Button variant="danger" onClick={clearDonorTable} className="ms-5">
            Clear Data
          </Button>
          {donors.length === 0 ? (
            <h3 className="mt-3 text-center">No data available</h3>
          ) : (
            <Container>
              <h3 className="text-center">Donations</h3>
              <Table
                border="1"
                cellPadding="10"
                cellSpacing="10"
                striped
                bordered
                hover
                responsive
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Phone</th>
                    <th>Occupation</th>
                    <th>Payment</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map((donor) => {
                    return (
                      <tr key={donor.d_id}>
                        <td>{donor.d_id}</td>
                        <td>{donor.d_name}</td>
                        <td>{donor.email}</td>
                        <td>{donor.phone}</td>
                        <td>{donor.occupation}</td>
                        <td>{donor.payment_method}</td>
                        <td>{donor.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          )}
        </Tab>
        <Tab eventKey="profile" title="Volunteer">
          <Button
            variant="info"
            disabled={Loading}
            onClick={!Loading ? fetchVolunteersData : null}
          >
            {Loading ? "Loading…" : "View Volunteers data"}
          </Button>
          <Button
            variant="secondary"
            onClick={clearVolunteerTable}
            className="ms-5"
          >
            Clear Data
          </Button>

          <Button
            variant="success"
            onClick={handleButtonClick}
            className="ms-5"
          >
            Update Data
          </Button>

          <Button
            variant="danger"
            onClick={handleButtonClick2}
            className="ms-5"
          >
            Delete volunteer
          </Button>

          {showForm && (
            <Container
              className="mt-3 p-3 border"
              style={{ maxWidth: "400px" }}
            >
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Enter email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Select Option</Form.Label>
                  <Form.Select
                    value={formData.func}
                    onChange={(e) =>
                      setFormData({ ...formData, func: e.target.value })
                    }
                  >
                    <option value="">Select...</option>
                    <option value="updateNameOfVolunteer">name</option>
                    <option value="updatePhoneOfVolunteer">phone</option>
                    <option value="updatePasswordOfVolunteer">password</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter new value"
                    value={
                      formData.func === "updateNameOfVolunteer"
                        ? formData.name
                        : formData.func === "updatePhoneOfVolunteer"
                        ? formData.phone
                        : formData.password
                    }
                    onChange={(e) => {
                      if (formData.func === "updateNameOfVolunteer") {
                        setFormData({ ...formData, name: e.target.value });
                      } else if (formData.func === "updatePhoneOfVolunteer") {
                        setFormData({ ...formData, phone: e.target.value });
                      } else if (
                        formData.func === "updatePasswordOfVolunteer"
                      ) {
                        setFormData({ ...formData, password: e.target.value });
                      }
                    }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={updateVolunteer}
                >
                  Submit
                </Button>
              </Form>
            </Container>
          )}

          <Container>
            {showForm2 && (
              <Container
                className="mt-3 p-3 border"
                style={{ maxWidth: "400px" }}
              >
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter id</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter id"
                      value={formData.id}
                      onChange={(e) =>
                        setFormData({ ...formData, id: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={deleteVolunteer}
                  >
                    Confirm
                  </Button>
                </Form>
              </Container>
            )}
          </Container>

          {volunteers.length === 0 ? (
            <h3 className="mt-3 text-center">No data available</h3>
          ) : (
            <Container>
              <h3 className="text-center">Volunteers</h3>
              <Table
                border="1"
                cellPadding="10"
                cellSpacing="10"
                striped
                bordered
                hover
                responsive
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Joining date</th>
                    <th>campaign_id</th>
                    <th>application_id</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteers.map((volunteer) => {
                    return (
                      <tr key={volunteer.v_id}>
                        <td>{volunteer.v_id}</td>
                        <td>{volunteer.v_name}</td>
                        <td>{volunteer.email}</td>
                        <td>{volunteer.phone}</td>
                        <td>{volunteer.dob}</td>
                        <td>{volunteer.joining_date}</td>
                        <td>{volunteer.c_id}</td>
                        <td>{volunteer.appl_id}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          )}
        </Tab>
        <Tab eventKey="longer-tab" title="Applications">
          <Button
            variant="info"
            disabled={Loading}
            onClick={!Loading ? fetchApplicantsData : null}
          >
            {Loading ? "Loading…" : "View Applicants data"}
          </Button>

          <Button
            variant="danger"
            onClick={clearApplicantTable}
            className="ms-5"
          >
            Clear Data
          </Button>
          {applicants.length === 0 ? (
            <h3 className="mt-3 text-center">No data available</h3>
          ) : (
            <Container>
              <h3 className="text-center">Applicants</h3>
              <Table
                border="1"
                cellPadding="10"
                cellSpacing="10"
                striped
                bordered
                hover
                responsive
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Phone</th>
                    <th>DOB</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((applicant) => {
                    return (
                      <tr key={applicant.appl_id}>
                        <td>{applicant.appl_id}</td>
                        <td>{applicant.appl_name}</td>
                        <td>{applicant.email}</td>
                        <td>{applicant.phone}</td>
                        <td>{applicant.dob}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          )}
        </Tab>
        <Tab eventKey="contact" title="Admin">
          <Button
            variant="success"
            onClick={handleButtonClick3}
            className="ms-5"
          >
            Update Password
          </Button>
          <Button
            variant="primary"
            className="ms-3"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            Add Volunteer
          </Button>

          <Button variant="primary" className="ms-3" onClick={fetchAdminData}>
            Get all admins
          </Button>

          <Button variant="danger" onClick={clearAdminTable} className="ms-3">
            Clear Data
          </Button>

          <Button
            variant="primary"
            className="ms-3"
            onClick={() => setShowAddForm2(!showAddForm2)}
          >
            Add admin
          </Button>

          {showForm3 && (
            <Container
              className="mt-3 p-3 border"
              style={{ maxWidth: "400px" }}
            >
              <Form onSubmit={updateAdminPassword}>
                <Form.Group className="mb-3">
                  <Form.Label>New password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Confirm
                </Button>
              </Form>
            </Container>
          )}

          {showAddForm && (
            <Container
              className="mt-3 p-3 border"
              style={{ maxWidth: "400px" }}
            >
              <Form onSubmit={handleAddVolunteer}>
                <Form.Group className="mb-3">
                  <Form.Label>Application ID</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Application ID"
                    value={addVolunteerData.appl_id}
                    onChange={(e) =>
                      setAddVolunteerData({
                        ...addVolunteerData,
                        appl_id: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Joining Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={addVolunteerData.joining_date}
                    onChange={(e) =>
                      setAddVolunteerData({
                        ...addVolunteerData,
                        joining_date: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Campaign ID</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Campaign ID"
                    value={addVolunteerData.c_id}
                    onChange={(e) =>
                      setAddVolunteerData({
                        ...addVolunteerData,
                        c_id: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Add Volunteer
                </Button>
              </Form>
            </Container>
          )}

          {admins.length === 0 ? (
            <h3 className="mt-3 text-center">No data available</h3>
          ) : (
            <Container>
              <h3 className="text-center">Admins</h3>
              <Table
                border="1"
                cellPadding="10"
                cellSpacing="10"
                striped
                bordered
                hover
                responsive
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Phone</th>
                    <th>dob</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin) => {
                    return (
                      <tr key={admin.admin_id}>
                        <td>{admin.admin_id}</td>
                        <td>{admin.admin_name}</td>
                        <td>{admin.email}</td>
                        <td>{admin.phone}</td>
                        <td>{admin.dob}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          )}

          {showAddForm2 && (
            <Container
              className="mt-3 p-3 border"
              style={{ maxWidth: "400px" }}
            >
              <Form onSubmit={handleAddAdmin}>
                <Form.Group className="mb-3">
                  <Form.Label>Volunteer ID</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Volunteer ID"
                    value={addAdminData.v_id}
                    onChange={(e) =>
                      setAddAdminData({
                        ...addAdminData,
                        v_id: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Add Admin
                </Button>
              </Form>
            </Container>
          )}
        </Tab>

        <Tab eventKey="campaigns" title="campaigns">
          <Button
            variant="info"
            disabled={Loading}
            onClick={!Loading ? fetchCampaignsData : null}
          >
            {Loading ? "Loading…" : "View Campaign data"}
          </Button>
          <Button
            variant="secondary"
            onClick={clearCampaignTable}
            className="ms-5"
          >
            Clear Data
          </Button>

          {campaigns.length === 0 ? (
            <h3 className="mt-3 text-center">No data available</h3>
          ) : (
            <Container>
              <h3 className="text-center">Campaigns</h3>
              <Table
                border="1"
                cellPadding="10"
                cellSpacing="10"
                striped
                bordered
                hover
                responsive
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => {
                    return (
                      <tr key={campaign.c_id}>
                        <td>{campaign.c_id}</td>
                        <td>{campaign.c_name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          )}
        </Tab>
      </Tabs>
    </Container>
  );
}
