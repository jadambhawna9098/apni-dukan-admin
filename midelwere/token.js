import jwt from "jsonwebtoken";
export const verifyToken = (request,response,next)=>{
    console.log ("hiiii")
  let token = request.headers.authorization;
  console.log("token"+token);

  try{
    if(!token)
     throw new Error();
    token = token.split(" ")[1]; 
    jwt.verify(token,"abcdefg");
    next();
  }
  catch(err){
    return response.status(401).json({error: "Unauthorized request", status: false});
  }
}