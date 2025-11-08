import { getConnectionObject } from ;
import {compareSync, hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function updatePasswordOfVolunteerAdmin(request,response){
	try{
		const connection = getConnectionObject();
		const [email,password] = request.body;
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
	}catch(error){
		
	}
}

export async function adminLogin(request,response){
	try{
		const connection = getConnectionObject();
		const [email,password] = request.body;
		const qry = `SELECT * FROM admin WHERE email = '${email}'`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.length === 0){
			response.status(400).send({message:"Login failed, email doesn't exist"});
		}else{
			if(compareSync(password,resultSet[0].password)){
				const token = jwt.sign(admin_id:resultSet.[0].admin_id,'LinusTorvalds');
				response.status(200).send({token,message:"Login successful"});
			}else{
				response.status(400).send({message:"Login failed!, password is invalid"});
			}
		}
	} catch(error){
		console.log(error);
		response.status(500).send({message:"Something went wrong!"});
	}
	
}