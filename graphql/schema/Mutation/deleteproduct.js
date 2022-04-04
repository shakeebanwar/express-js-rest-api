import { graphql } from 'graphql';
import { UserType } from '../types';
import { GraphQLString, GraphQLInt } from 'graphql'
import { Product } from '../../../models';
import auth from '../../../middlewares/auth'




const deleteproduct = {  
  type: UserType,
  args: {
    id: { type: GraphQLString }

  },
  async resolve(parent, { id},req,res) {

    console.log("obj==>",req.headers.authorization)
    


    const document = await Product.findOneAndRemove({ _id: id });
    let obj;
    if (!document) {
        obj = {status:false,message:"Id is incorrect"}
        return obj
    }
    else{

        obj = {status:true,message:"Delete Successfully"}
        return obj

    }





  },
}


export default deleteproduct