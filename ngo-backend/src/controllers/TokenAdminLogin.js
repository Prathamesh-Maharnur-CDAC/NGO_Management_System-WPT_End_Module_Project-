import {compareSync, hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getConnectionObject } from "../configs/DbConfig.js";

export async function updatePasswordOfAdmin(request,response){
	try{
		const connection = getConnectionObject();
		const {email,password} = request.body;
		const encryptedPassword = hashSync(password,12);
		const qry = `UPDATE admin SET a_password = '${encryptedPassword}' WHERE email = '${email}'`
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.affectedRows === 1){
			response.status(200).send({message:"Password updated successfully"});
		}else{
			response.status(500).send({message:"Password updation failed!"});
		}
	}catch(error){
		console.log(error);	
			response.status(500).send({message:"Something went wrong!"});
	}
}

export async function adminLogin(request,response){
	try{
		const connection = getConnectionObject();
		const {email,password} = request.body;
		const qry = `SELECT * FROM admin WHERE email = '${email}'`;
		
		const [resultSet] = await connection.query(qry);
		if(resultSet.length === 0){
			response.status(400).send({message:"Login failed, email doesn't exist"});
		}else{
			if("admin@123"===resultSet[0].a_password){
				const token = jwt.sign({admin_id:resultSet[0].admin_id},'LinusTorvalds');
				response.status(200).send({token,message:"Login successful"});
			}else if(compareSync(password,resultSet[0].a_password)){
				const token = jwt.sign({admin_id:resultSet[0].admin_id},'LinusTorvalds');
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