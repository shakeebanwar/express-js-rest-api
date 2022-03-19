import Joi from "joi";
import { userInfo } from "os";
import CustomErrorHandler from "../../services/CustomeErrorHandler";
import { User } from "../../models";



const registerController = {

    async register(req,res,next){

         // CHECKLIST
        // [ ] validate the request
        // [ ] authorise the request
        // [ ] check if user is in the database already
        // [ ] prepare model
        // [ ] store in database
        // [ ] generate jwt token
        // [ ] send response

        // Validation
        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: Joi.ref('password')
        });

        
        const {error} = registerSchema.validate(req.body)

        if(error){
            
            return next(error)
            
        }


        //check if user is already exist in my database
        try{

            const exist = await User.exits({email:req.body.email})
            if(exist){

                return next(CustomErrorHandler.alreadyExist("This email is already exist"))
            }

        }

        catch(err){
            
            return next(err)

        }

        res.json({msg:"Hello world"})


    }
}

export default registerController;