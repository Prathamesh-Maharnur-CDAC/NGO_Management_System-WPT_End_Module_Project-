import { getConnectionObject } from "../configs/DbConfig.js";

export async function createAdmin(request,response){
	try{
		const connection = getConnectionObject();
		const {name,email,phone,dob,password} = request.body;
		const qry = `INSERT INTO admin(admin_name, email, phone, dob, a_password) VALUES ('${name}','${email}','${phone}','${dob}', '${password}')`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Admin added successfull"});
		}else{
			response.status(500).send({message:"Admin insertion Failed!"});
		}
	} catch(error){
		console.log(error);
		if(errorno == 1062){
			response.status(400).send("You have already applied once");
		}else{
			response.status(500).send({message:"Something went wrong!"});
		}
	}
}

export async function getAllAdminData(request,response){
	try{
		const connection = getConnectionObject();
		const qry = "SELECT admin_id, admin_name, email, phone, DATE_FORMAT(dob,'%Y-%m-%d') AS dob from admin";
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.length === 0){
			response.status(404).send({message:"There are no volunteers yet!"})
		}else{
			response.status(200).send(resultSet);
		}
	} catch(error) {
		console.log(error);	
		response.status(500).send({message:"Something went wrong!"});
	} 
}


export async function addVolunteerFromApplication(req, res) {
  try {
    const connection = getConnectionObject();
    const { appl_id, joining_date, c_id } = req.body;

    
    const [application] = await connection.query(
      "SELECT appl_name, email, phone, dob FROM application_list WHERE appl_id = ?",
      [appl_id]
    );

    if (application.length === 0) {
      return res.status(404).send({ message: "Application not found!" });
    }

    const { appl_name, email, phone, dob } = application[0];

    
    const [result] = await connection.query(
      "INSERT INTO volunteer (v_name, email, phone, dob, joining_date, c_id, appl_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [appl_name, email, phone, dob, joining_date, c_id, appl_id]
    );

    if (result.affectedRows === 1) {
      return res.status(200).send({ message: "Volunteer added successfully!" });
    } else {
      return res.status(400).send({ message: "Failed to add volunteer!" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong!" });
  }
}

export async function addAdminFromVolunteer(req, res) {
  try {
    const connection = getConnectionObject();
    const { v_id } = req.body;

    if (!v_id) {
      return res.status(400).send({ success: false, message: "Volunteer ID is required!" });
    }

    const [volunteer] = await connection.query(
      "SELECT v_name, email, phone, dob FROM volunteer WHERE v_id = ?",
      [v_id]
    );

    if (volunteer.length === 0) {
      return res.status(404).send({ success: false, message: "Volunteer not found!" });
    }

    const { v_name, email, phone, dob } = volunteer[0];

    const [result] = await connection.query(
      "INSERT INTO admin (admin_name, email, phone, dob, v_id) VALUES (?, ?, ?, ?, ?)",
      [v_name, email, phone, dob, v_id]
    );

    if (result.affectedRows === 1) {
      return res.status(200).send({ success: true, message: "Admin added successfully!" });
    } else {
      return res.status(400).send({ success: false, message: "Failed to add admin!" });
    }
  } catch (error) {
    console.error("Error in addAdminFromVolunteer:", error);
    res.status(500).send({ success: false, message: "Something went wrong!" });
  }
}




// export async function updatePasswordOfAdmin(request,response){
	
// 	try{
// 		const connection = getConnectionObject();
// 		const {password,email} = request.body;
// 		const qry = `UPDATE admin SET a_password = '${password}' WHERE email = '${email}'`
		
// 		const [resultSet] = await connection.query(qry);
// 		if(resultSet.affectedRows === 1){
// 			response.status(200).send({message:"Password updated successfully"});
// 		}else{
// 			response.status(500).send({message:"Password updation failed!"});
// 		}
// 	}catch(error){
// 		console.log(error);	
// 			response.status(500).send("Something went wrong!");
// 	}
	
// }



/*
export async function deleteAdmin(request,response){
	try{
		const connection = getConnectionObject();
		const {id} = request.body;
		const qry = `DELETE FROM admin WHERE admin_id = (${id})'`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Admin deleted successfully"});
		}else{
			response.status(500).send({message:"Admin deletion failed!"});
		}
	}catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
}
*/