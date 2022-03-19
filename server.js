import express from 'express'
import { APP_PORT,DB_URL} from './config'
import errorHandler from './middlewares/errorHandlers';
import routes from './routes'
import mongoose from 'mongoose';


// Database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});



const app = express()
app.use(express.json()) //user for json response enabled
app.use('/api',routes);
app.use(errorHandler)



app.listen(APP_PORT,()=> console.log(`listening port ${APP_PORT}`))