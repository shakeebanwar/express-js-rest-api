import { GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLList, GraphQLNonNull} from 'graphql'
import userData from '../../../MOCK_DATA.json'
import UserType from '../types/userType';

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      getAllUsers: {
        type: new GraphQLList(UserType),
        args: { id: { type: GraphQLInt },firstName:{type:GraphQLString} },
        resolve(parent, args) {
          console.log("arg",args)
          return userData;
        },
      },
      getUserById: {
        type: UserType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve(parent, {id}) {

          console.log("id",id)
          return userData[0]
        }
      }
    },
  });

  export default RootQuery