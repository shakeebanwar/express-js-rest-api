import express from 'express'
import { APP_PORT,DB_URL} from './config'
import errorHandler from './middlewares/errorHandlers';
import routes from './routes'
import mongoose from 'mongoose';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';



// Database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});



global.appRoot = path.resolve(__dirname)
const app = express()
app.use(express.urlencoded({extended:false})) // multipartform data
app.use(express.json()) //user for json response enabled
app.use('/api',routes);
app.use('/uploads',express.static('uploads'))
app.use(errorHandler)


app.use('/graphql', graphqlHTTP({
    schema: schema,
 
    graphiql: true,
  }));



app.listen(APP_PORT,()=> console.log(`listening port ${APP_PORT}`))