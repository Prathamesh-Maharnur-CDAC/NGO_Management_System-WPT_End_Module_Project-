import express from 'express'

const app = express();


app.use(express.json);

app.post("/fillApplicationForm", fillApplicationForm);
app.get("/getAllApplicationFormData", getAllApplicationFormData );
app.put("/updateNameInApplicationForm", updateNameInApplicationForm);
app.put("/updateEmailInApplicationForm", updateEmailInApplicationForm);
app.put("/updatePhoneInApplicationForm", updatePhoneInApplicationForm);
app.put("/updateDOBInApplicationForm", updateDOBInApplicationForm);
app.put("/updatePasswordInApplicationForm", updatePasswordInApplicationForm);


app.post("/addCampaign", addCampaign);
app.get("/getAllCampaignData", getAllCampaignData);
app.put("updateCampaign", updateCampaign);
app.delete("/deleteCampaign", deleteCampaign);

app.post("/donateMoney", donateMoney);
app.get("/getAllDonationData", getAllDonationData);


app.post("/createVolunteer", createVolunteer);
app.get("/getAllVolunteerData", getAllVolunteerData);
app.put("/updateNameOfVolunteer", updateNameOfVolunteer);
app.put("/updateEmailOfVolunteer", updateEmailOfVolunteer);
app.put("/updatePhoneOfVolunteer", updatePhoneOfVolunteer);
app.put("/updateDOBOfVolunteer", updateDOBOfVolunteer);
app.put("/updatePasswordOfVolunteer", updatePasswordOfVolunteer);
app.put("/updateDOBOfVolunteer", updateDOBOfVolunteer);
app.delete("/deleteVolunteer", deleteVolunteer);

app.post("/createAdmin", createAdmin);
app.get("/getAllAdminData", getAllAdminData);



//  ---------------------------------------- functions ---------------------------------------------

// -------------------------------------------- DB Connections --------------------------------------
let connection = null;
export function async connectDb(){
	try{
		connection = await createConnection({
			host:'localhost',
			user:root,
			password:'cdac',
			port:"3306",
			database:'ngo_mgmt_system'
		});
		
	}catch(error){
		console.log("Error in db connection");
		console.log(error);
	}
	return connection; // doubt why sir returned connection?
}

export function getConnectionObject(){
	return connection;
}

// -----------------------------------------------------------------------------------------

// --------------------------------------- Application Function -----------------------------

export async function fillApplicationForm(request,response){
	
	try{
		const connection = getConnectionObject();
		const [name,email,phone,dob] = request.body;
		const qry = `INSERT INTO application_list(appl_name, email, phone, dob) VALUES ('${name}',${email},'${phone}',${dob})`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Application Registration successfull"});
		}else{
			response.status(500).send({message:"Application Registration Failed!"});
		}
	}catch(error){
		console.log(error);
		if(errorno == 1062){
			response.status(400).send("You have already applied once");
		}else{
			response.status(500).send("Something went wrong!");
		}
	}
	
}

export asysnc function getAllApplicationFormData(request,response){
	try{
		const connection = getConnectionObject();
		const qry = "SELECT appl_id, appl_name, email, phone, dob from campaign";
		
		const [resultSet] = await connection.query(qry);
		if(resulSet.length === 0){
			resonse.status(404).send({message:"There is no campaign yet!"})
		}else{
			reponse.status(200).send(resultSet);
		}
	} catch(error) {
		console.log(error);	
		response.status(500).send("Something went wrong!");
	} 
}

export async function updateNameInApplicationForm(request,response){
	
	try{
		const connection = getConnectionObject();
		const [name,email] = request.body;
		const qry = `UPDATE application_list SET name = '${name}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Name updated successfully"});
		}else{
			response.status(500).send({message:"Name updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

export async function updateEmailInApplicationForm(request,response){
	
	try{
		const connection = getConnectionObject();
		const [email,id] = request.body;
		const qry = `UPDATE application_list SET email = '${email}' WHERE appl_id = ${id}`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Email updated successfully"});
		}else{
			response.status(500).send({message:"Email updation failed!"});
		}
	}catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
	
}

export async function updatePhoneInApplicationForm(request,response){
	
	try{
		const connection = getConnectionObject();
		const [phone,email] = request.body;
		const qry = `UPDATE application_list SET phone = '${phone}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Phone number updated successfully"});
		}else{
			response.status(500).send({message:"Phone number updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

export async function updateDOBInApplicationForm(request,response){
	
	try{
		const connection = getConnectionObject();
		const [dob,email] = request.body;
		const qry = `UPDATE application_list SET dob = '${dob}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"DOB updated successfully"});
		}else{
			response.status(500).send({message:"DOB updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

export async function updatePasswordInApplicationForm(request,response){
	
	try{
		const connection = getConnectionObject();
		const [password,email] = request.body;
		const qry = `UPDATE application_list SET appl_password = '${password}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Password updated successfully"});
		}else{
			response.status(500).send({message:"Password updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

// ----------------------------------------- campaign functions -------------------------------------------

export async function addCampaign(request,response){
	try{
		const connection = getConnectionObject();
		const [name] = request.body;
		const qry = `INSERT INTO campaign(c_name) VALUES (${name})'`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Campaign added successfully"});
		}else{
			response.status(500).send({message:"Campaign insertion failed!"});
		}
	}catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
}


export asysnc function getAllCampaignData(request,response){
	try{
		const connection = getConnectionObject();
		const qry = "SELECT * from campaign";
		
		const [resultSet] = await connection.query(qry);
		if(resulSet.length === 0){
			resonse.status(404).send({message:"There is no campaign yet!"})
		}else{
			reponse.status(200).send(resultSet);
		}
	} catch(error) {
		console.log(error);	
		response.status(500).send("Something went wrong!");
	} 
}


export async function updateCampaign(request,response){
	try{
		const connection = getConnectionObject();
		const [name,id] = request.body;
		const qry = `UPDATE campaign SET c_name = '${name}' WHERE c_id = ${id}`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Campaign added successfully"});
		}else{
			response.status(500).send({message:"Campaign insertion failed!"});
		}
	}catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
}


// doubt deletion for foreign keys in volunteer
export async function deleteCampaign(request,response){
	try{
		const connection = getConnectionObject();
		const [id] = request.body;
		const qry = `DELETE FROM campaign WHERE c_id = (${id})'`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Campaign deleted successfully"});
		}else{
			response.status(500).send({message:"Campaign deletion failed!"});
		}
	}catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
}

// --------------------------------------------------------------------------------------------------------

// ------------------------------------- donations functions -----------------------------------------------

export async function donateMoney(request,response){
	try{
		const connection = getConnectionObject();
		const [name,email,phone,occupation,payment_method] = request.body;
		const qry = `INSERT INTO donations(d_name, email, phone, occupation, payment_method) VALUES ('${name}', '${email}', '${phone}', '${occupation}', '${paymethod-method}')'`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Thank you for Donation"});
		}else{
			response.status(500).send({message:"Donation failed!"});
		}
	} catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
}

export asysnc function getAllDonationData(request,response){
	try{
		const connection = getConnectionObject();
		const qry = "SELECT d_id, d_name, email, phone, occupation, payment_method from donations";
		
		const [resultSet] = await connection.query(qry);
		if(resulSet.length === 0){
			resonse.status(404).send({message:"There is no donation yet!"})
		}else{
			reponse.status(200).send(resultSet);
		}
	} catch(error) {
		console.log(error);	
		response.status(500).send("Something went wrong!");
	} 
}

// --------------------------------------------------------------------------------------------------------
// ------------------------------------- Volunteer Function ---------------------------------------------

export async function createVolunteer(request,response){
	try{
		const connection = getConnectionObject();
		const [name,email,phone,dob,joining_date,c_id,appl_id] = request.body;
		const qry = `INSERT INTO volunteer(v_name, email, phone, dob, joining_date, c_id, appl_id) VALUES ('${name}',${email},'${phone}',${dob}, ${joining_date}, ${c_id}, ${appl_id})`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Volunteer added successfull"});
		}else{
			response.status(500).send({message:"Volunteer insertion Failed!"});
		}
	} catch(error){
		console.log(error);
		if(errorno == 1062){
			response.status(400).send("You have already applied once");
		}else{
			response.status(500).send("Something went wrong!");
		}
	}
}

export asysnc function getAllVolunteerData(request,response){
	try{
		const connection = getConnectionObject();
		const qry = "SELECT v_id, v_name, email, phone, dob, joining_date, c_id, appl_id from volunteer";
		
		const [resultSet] = await connection.query(qry);
		if(resulSet.length === 0){
			resonse.status(404).send({message:"There are no volunteers yet!"})
		}else{
			reponse.status(200).send(resultSet);
		}
	} catch(error) {
		console.log(error);	
		response.status(500).send("Something went wrong!");
	} 
}

export async function updateNameOfVolunteer(request,response){
	
	try{
		const connection = getConnectionObject();
		const [name,email] = request.body;
		const qry = `UPDATE volunteer SET v_name = '${name}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Name updated successfully"});
		}else{
			response.status(500).send({message:"Name updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

export async function updateEmailOfVolunteer(request,response){
	
	try{
		const connection = getConnectionObject();
		const [email,id] = request.body;
		const qry = `UPDATE volunteer SET email = '${email}' WHERE v_id = ${id}`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Email updated successfully"});
		}else{
			response.status(500).send({message:"Email updation failed!"});
		}
	}catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
	
}

export async function updatePhoneOfVolunteer(request,response){
	
	try{
		const connection = getConnectionObject();
		const [phone,email] = request.body;
		const qry = `UPDATE volunteer SET phone = '${phone}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Phone number updated successfully"});
		}else{
			response.status(500).send({message:"Phone number updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

export async function updateDOBOfVolunteer(request,response){
	
	try{
		const connection = getConnectionObject();
		const [dob,email] = request.body;
		const qry = `UPDATE volunteer SET dob = '${dob}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"DOB updated successfully"});
		}else{
			response.status(500).send({message:"DOB  updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

export async function updatePasswordOfVolunteer(request,response){
	
	try{
		const connection = getConnectionObject();
		const [password,email] = request.body;
		const qry = `UPDATE volunteer SET v_password = '${password}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Password updated successfully"});
		}else{
			response.status(500).send({message:"Password updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

export async function updateDOBOfVolunteer(request,response){
	
	try{
		const connection = getConnectionObject();
		const [joining_date,email] = request.body;
		const qry = `UPDATE volunteer SET joining_date = '${joining_date}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Joining Date updated successfully"});
		}else{
			response.status(500).send({message:"Joining Date  updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}

// doubt deletion for foreign keys in volunteer
export async function deleteVolunteer(request,response){
	try{
		const connection = getConnectionObject();
		const [id] = request.body;
		const qry = `DELETE FROM volunteer WHERE c_id = (${id})'`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Volunteer deleted successfully"});
		}else{
			response.status(500).send({message:"Volunteer deletion failed!"});
		}
	}catch(error){
		console.log(error);	
		response.status(500).send("Something went wrong!");
	}
}



// ----------------------------------------------------------------------------------------------------------
// ------------------------------------------- Admin function -----------------------------------------------

export async function createAdmin(request,response){
	try{
		const connection = getConnectionObject();
		const [name,email,phone,dob,password] = request.body;
		const qry = `INSERT INTO admin(admin_name, email, phone, dob, a_password) VALUES ('${name}',${email},'${phone}',${dob}, ${password})`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Volunteer added successfull"});
		}else{
			response.status(500).send({message:"Volunteer insertion Failed!"});
		}
	} catch(error){
		console.log(error);
		if(errorno == 1062){
			response.status(400).send("You have already applied once");
		}else{
			response.status(500).send("Something went wrong!");
		}
	}
}

export asysnc function getAllAdminData(request,response){
	try{
		const connection = getConnectionObject();
		const qry = "SELECT admin_id, admin_name, email, phone, dob from admin";
		
		const [resultSet] = await connection.query(qry);
		if(resulSet.length === 0){
			resonse.status(404).send({message:"There are no volunteers yet!"})
		}else{
			reponse.status(200).send(resultSet);
		}
	} catch(error) {
		console.log(error);	
		response.status(500).send("Something went wrong!");
	} 
}

export async function updatePasswordOfAdmin(request,response){
	
	try{
		const connection = getConnectionObject();
		const [password,email] = request.body;
		const qry = `UPDATE admin SET a_password = '${password}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Password updated successfully"});
		}else{
			response.status(500).send({message:"Password updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send("Something went wrong!");
	}
	
}



/*
export async function deleteAdmin(request,response){
	try{
		const connection = getConnectionObject();
		const [id] = request.body;
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

// --------------------------------------------------------------------------------------------------