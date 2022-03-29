import {GraphQLObjectType} from 'graphql'
import {createUser} from './index'

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser
    },
  });



export default Mutation