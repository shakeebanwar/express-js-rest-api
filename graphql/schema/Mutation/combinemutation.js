import {GraphQLObjectType} from 'graphql'
import {createUser,updateProduct} from './index'

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser,
      updateProduct
    },
  });



export default Mutation