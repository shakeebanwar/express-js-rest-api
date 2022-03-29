import { GraphQLSchema} from 'graphql'
import RootQuery from './query/querySchema'
import Mutation from '../schema/Mutation/getuser'





export default new GraphQLSchema({ query: RootQuery, mutation: Mutation });
