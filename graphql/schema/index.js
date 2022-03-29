import { GraphQLSchema} from 'graphql'
import RootQuery from '../schema/query/userquery'
import Mutation from '../schema/Mutation/getuser'





export default new GraphQLSchema({ query: RootQuery, mutation: Mutation });
