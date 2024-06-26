import jwt from "jsonwebtoken"
import {createError} from "../utils/error.js"

export const verifyToken = (req,res,next)=>{

    const token  = req.cookies.access_token;
    console.log("Inside Verify Token");
   // res.write(token);
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });
  };