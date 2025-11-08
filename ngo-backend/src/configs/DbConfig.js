import { createConnection } from 'mysql2/promise';

let connection = null;
export async function connectDb(){
	try{
		connection = await createConnection({
			host:'localhost',
			user:'root',
			password:'cdac',
			port:"3306",
			database:'ngo_mgmt_system'
		});
		console.log("Successfully connected to DB.....");
	}catch(error){
		console.log("Error in db connection");
		console.log(error);
	}
	return connection; // doubt why sir returned connection?
}

export function getConnectionObject(){
	return connection;
}