import {GraphQLObjectType} from 'graphql'
import {createUser,updateProduct,deleteproduct} from './index'

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser,
      updateProduct,
      deleteproduct
    },
  });



export default Mutation