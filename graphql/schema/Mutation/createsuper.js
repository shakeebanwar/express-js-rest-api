import { graphql } from 'graphql';
import {UserType} from '../types';
import {GraphQLString,GraphQLInt} from 'graphql'
import { Product } from '../../../models';




const createUser = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        size: { type: GraphQLString },
        image: { type: GraphQLString },
    },
    async resolve(parent, {name,price,size,image}) {

        throw new Error("User not found")

        const document = await Product.create({
            name,
            price,
            size,
            image
        })
      
      return document;
    },
  }


export default createUser