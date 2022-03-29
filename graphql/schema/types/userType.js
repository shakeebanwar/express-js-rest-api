import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql'



const UserType = new GraphQLObjectType({
  name: "getallusers",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    size: { type: GraphQLString },
    image: { type: GraphQLString },
    createdAt:{type:GraphQLString}
    
  }),
});



export default UserType
