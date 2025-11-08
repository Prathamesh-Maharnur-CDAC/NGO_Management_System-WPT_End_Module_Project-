import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import {
  getAllVolunteerData
} from "../../services/volunteerService";
import { getAllApplicantsData } from "../../services/applyService";
import { useNavigate } from "react-router-dom";

export function VolunteerDashBoard() {
  
  const [Loading, setLoading] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [applicants, setApplicants] = useState([]);
  
  const navigate = useNavigate();

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



  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  
  const clearVolunteerTable = () => setVolunteers([]);
  const clearApplicantTable = () => setApplicants([]);
  

  return (
    <Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-between mt-3 mb-4"
      >
        <h2 className="comfortaa font35 mt-5 text-left font-color-green">
          Volunteer Dashboard
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
 
        <Tab eventKey="home" title="Volunteer">
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
        
        
      </Tabs>
    </Container>
  );
}
