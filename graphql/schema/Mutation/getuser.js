import { graphql } from 'graphql';
import {UserType} from '../types';
import {GraphQLObjectType,GraphQLString} from 'graphql'


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser: {
        type: UserType,
        args: {
          firstName: { type: GraphQLString },
          lastName: { type: GraphQLString },
          email: { type: GraphQLString },
          password: { type: GraphQLString },
        },
        resolve(parent, args) {
          userData.push({
            id: userData.length + 1,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: args.password,
          });
          return args;
        },
      },
      updateUser: {
          type: UserType
      }
    },
  });



export default Mutation