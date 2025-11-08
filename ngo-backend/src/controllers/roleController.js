import { getConnectionObject } from "../configs/DbConfig.js";

// --------------------------------------- Application Function -----------------------------

export async function fillApplicationForm(request, response) {
  try {
    const connection = getConnectionObject();
    const { name, email, phone, dob } = request.body;
    const qry = `INSERT INTO application_list(appl_name, email, phone, dob) VALUES ('${name}','${email}','${phone}','${dob}')`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response
        .status(200)
        .send({ message: "Application Registration successfull" });
    } else {
      response
        .status(500)
        .send({ message: "Application Registration Failed!" });
    }
  } catch (error) {
    console.log(error);
    if (errorno == 1062) {
      response.status(400).send("You have already applied once");
    } else {
      response.status(500).send("Something went wrong!");
    }
  }
}

export async function getAllApplicationFormData(request, response) {
  try {
    const connection = getConnectionObject();
    const qry =
      "SELECT appl_id, appl_name, email, phone, DATE_FORMAT(dob, '%Y-%m-%d') AS dob from application_list";

    const [resultSet] = await connection.query(qry);
    if (resultSet.length === 0) {
      response.status(404).send({ message: "There is no application yet!" });
    } else {
      response.status(200).send(resultSet);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

export async function updateNameInApplicationForm(request, response) {
  try {
    const connection = getConnectionObject();
    const { name, email } = request.body;
    const qry = `UPDATE application_list SET appl_name = '${name}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Name updated successfully" });
    } else {
      response.status(500).send({ message: "Name updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

export async function updateEmailInApplicationForm(request, response) {
  try {
    const connection = getConnectionObject();
    const { email, id } = request.body;
    const qry = `UPDATE application_list SET email = '${email}' WHERE appl_id = ${id}`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Email updated successfully" });
    } else {
      response.status(500).send({ message: "Email updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

export async function updatePhoneInApplicationForm(request, response) {
  try {
    const connection = getConnectionObject();
    const { phone, email } = request.body;
    const qry = `UPDATE application_list SET phone = '${phone}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response
        .status(200)
        .send({ message: "Phone number updated successfully" });
    } else {
      response.status(500).send({ message: "Phone number updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

export async function updateDOBInApplicationForm(request, response) {
  try {
    const connection = getConnectionObject();
    const { dob, email } = request.body;
    const qry = `UPDATE application_list SET dob = '${dob}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "DOB updated successfully" });
    } else {
      response.status(500).send({ message: "DOB updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

export async function updatePasswordInApplicationForm(request, response) {
  try {
    const connection = getConnectionObject();
    const { password, email } = request.body;
    const qry = `UPDATE application_list SET appl_password = '${password}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Password updated successfully" });
    } else {
      response.status(500).send({ message: "Password updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

// ----------------------------------------- campaign functions -------------------------------------------

export async function addCampaign(request, response) {
  try {
    const connection = getConnectionObject();
    const { name } = request.body;
    const qry = `INSERT INTO campaign(c_name) VALUES ('${name}')`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Campaign added successfully" });
    } else {
      response.status(500).send({ message: "Campaign insertion failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

export async function getAllCampaignData(request, response) {
  try {
    const connection = getConnectionObject();
    const qry = "SELECT * from campaign";

    const [resultSet] = await connection.query(qry);
    if (resultSet.length === 0) {
      response.status(404).send({ message: "There is no campaign yet!" });
    } else {
      response.status(200).send(resultSet);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

export async function updateCampaign(request, response) {
  try {
    const connection = getConnectionObject();
    const { name, id } = request.body;
    const qry = `UPDATE campaign SET c_name = '${name}' WHERE c_id = ${id}`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Campaign added successfully" });
    } else {
      response.status(500).send({ message: "Campaign insertion failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

// doubt deletion for foreign keys in volunteer
export async function deleteCampaign(request, response) {
  try {
    const connection = getConnectionObject();
    const { id } = request.body;
    const qry = `DELETE FROM campaign WHERE c_id = (${id})`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Campaign deleted successfully" });
    } else {
      response.status(500).send({ message: "Campaign deletion failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Something went wrong!");
  }
}

// --------------------------------------------------------------------------------------------------------

// ------------------------------------- donations functions -----------------------------------------------

export async function donateMoney(request, response) {
  try {
    const connection = getConnectionObject();
    const { name, email, phone, occupation, payment_method, amount } =
      request.body;
    const qry = `INSERT INTO donations(d_name, email, phone, occupation, payment_method, amount) VALUES ('${name}', '${email}', '${phone}', '${occupation}', '${payment_method}', ${amount})`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Thank you for Donation" });
    } else {
      response.status(500).send({ message: "Donation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

export async function getAllDonationData(request, response) {
  try {
    const connection = getConnectionObject();
    const qry =
      "SELECT d_id, d_name, email, phone, occupation, payment_method, amount from donations";

    const [resultSet] = await connection.query(qry);
    if (resultSet.length === 0) {
      response.status(404).send({ message: "There is no donation yet!" });
    } else {
      response.status(200).send(resultSet);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

// --------------------------------------------------------------------------------------------------------
// ------------------------------------- Volunteer Function ---------------------------------------------

export async function createVolunteer(request, response) {
  try {
    const connection = getConnectionObject();
    const { name, email, phone, dob, joining_date, c_id, appl_id } =
      request.body;
    const qry = `INSERT INTO volunteer(v_name, email, phone, dob, joining_date, c_id, appl_id) VALUES ('${name}','${email}','${phone}','${dob}', '${joining_date}', ${c_id}, ${appl_id})`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Volunteer added successfull" });
    } else {
      response.status(500).send({ message: "Volunteer insertion Failed!" });
    }
  } catch (error) {
    console.log(error);
    if (errorno == 1062) {
      response.status(400).send("You have already applied once");
    } else {
      response.status(500).send({ message: "Something went wrong!" });
    }
  }
}

export async function getAllVolunteerData(request, response) {
  try {
    const connection = getConnectionObject();
    const qry =
      "SELECT v_id, v_name, email, phone, DATE_FORMAT(dob, '%Y-%m-%d') AS dob, DATE_FORMAT(joining_date, '%Y-%m-%d') AS joining_date, c_id, appl_id FROM volunteer";

    const [resultSet] = await connection.query(qry);
    if (resultSet.length === 0) {
      response.status(404).send({ message: "There are no volunteers yet!" });
    } else {
      response.status(200).send(resultSet);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

export async function updateNameOfVolunteer(request, response) {
  try {
    const connection = getConnectionObject();
    const { name, email } = request.body;
    const qry = `UPDATE volunteer SET v_name = '${name}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Name updated successfully" });
    } else {
      response.status(400).send({ message: "Name updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

export async function updateEmailOfVolunteer(request, response) {
  try {
    const connection = getConnectionObject();
    const { email, id } = request.body;
    const qry = `UPDATE volunteer SET email = '${email}' WHERE v_id = ${id}`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Email updated successfully" });
    } else {
      response.status(400).send({ message: "Email updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

export async function updatePhoneOfVolunteer(request, response) {
  try {
    const connection = getConnectionObject();
    const { phone, email } = request.body;
    const qry = `UPDATE volunteer SET phone = '${phone}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response
        .status(200)
        .send({ message: "Phone number updated successfully" });
    } else {
      response.status(400).send({ message: "Phone number updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

// export async function updateDOBOfVolunteer(request,response){

// 	try{
// 		const connection = getConnectionObject();
// 		const {dob,email} = request.body;
// 		const qry = `UPDATE volunteer SET dob = '${dob}' WHERE email = '${email}'`

// 		const [resultSet] = await connection.query(qry);
// 		if(resultSet.affectedRows === 1){
// 			response.status(200).send({message:"DOB updated successfully"});
// 		}else{
// 			response.status(500).send({message:"DOB  updation failed!"});
// 		}
// 	}catch(error){
// 		console.log(error);
// 			response.status(500).send("Something went wrong!");
// 	}

// }

export async function updatePasswordOfVolunteer(request, response) {
  try {
    const connection = getConnectionObject();
    const { password, email } = request.body;
    const qry = `UPDATE volunteer SET v_password = '${password}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Password updated successfully" });
    } else {
      response.status(400).send({ message: "Password updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

export async function updateDOBOfVolunteer(request, response) {
  try {
    const connection = getConnectionObject();
    const { joining_date, email } = request.body;
    const qry = `UPDATE volunteer SET joining_date = '${joining_date}' WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response
        .status(200)
        .send({ message: "Joining Date updated successfully" });
    } else {
      response.status(400).send({ message: "Joining Date  updation failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

// doubt deletion for foreign keys in volunteer
export async function deleteVolunteer(request, response) {
  try {
    const connection = getConnectionObject();
    const { id } = request.body;
    const qry = `DELETE FROM volunteer WHERE v_id = (${id})`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.affectedRows === 1) {
      response.status(200).send({ message: "Volunteer deleted successfully" });
    } else {
      response.status(400).send({ message: "Volunteer deletion failed!" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}

export async function volunteerLogin(request, response) {
  try {
    const connection = getConnectionObject();
    const { email, password } = request.body;
    const qry = `SELECT * FROM volunteer WHERE email = '${email}'`;

    const [resultSet] = await connection.query(qry);
    if (resultSet.length === 0) {
      response
        .status(400)
        .send({ message: "Login failed, email doesn't exist" });
    } else {
      if (resultSet[0].v_password === password) {
        response.status(200).send({ message: "Login successful" });
      } else {
        response
          .status(400)
          .send({ message: "Login failed!, password is invalid" });
      }
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "Something went wrong!" });
  }
}


// latest

export async function updateVolunteerByEmail(req,res){
const { email, field, value } = req.body;

  if (!email || !field || !value) {
    return res.status(400).send({ message: "Email, field, and value are required" });
  }

  try {
    const connection = getConnectionObject();
    const qry = `UPDATE volunteer SET ${field} = ? WHERE email = ?`;
    await connection.query(qry, [value, email]);
    res.status(200).send({ message: "Volunteer updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Update failed" });
  }
}



