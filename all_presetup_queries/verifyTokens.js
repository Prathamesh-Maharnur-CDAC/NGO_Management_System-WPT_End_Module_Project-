import 'jwt' from jsonwebtoken;

export async function verifyToken(request,response,next){
	try{
		const authHeader = request.get("Authorization");
		if(authHeader){
			const token = authHeader.split(" ")[1];
			jwt.verify(token,'LinusTorvalds',(error,payload) =>{
				if(error){
					response.status(400).send({message:"Token is invalid"});
				}else{
					request.loggedInAdminId = payload.admin_id;
					next();
				}
			})
		}else{
			response.status(401),send({message:"Token is missing"});
		}
	} catch(error){
		response.status(500).send({message:"Something went wrong"});
	}
}