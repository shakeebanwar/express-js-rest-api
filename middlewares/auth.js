import CustomErrorHandler from "../services/CustomeErrorHandler";
import JwtService from "../services/JwtServices";

const auth = async(req,res,next)=>{

    let authHeader = req.headers.authorization;
    
    if(!authHeader){
        
        return next(CustomErrorHandler.unAuthorized())
    }

    const token = authHeader.split(' ')[1]

    //verify token

    try{

        const {_id,role } = await JwtService.verify(token)
        const user = {

            _id,
            role
        }

        req.user = user
        next();
    }

    catch(err){

        return next(CustomErrorHandler.unAuthorized())

    }


}

export default auth;