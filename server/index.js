import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

//every route inside the postRoutes will start with 'posts
app.use('/posts', postRoutes);

//connecting app to database(mongoDB)
const CONNECTION_URL = 'mongodb+srv://aishwarya-singh04:@Me_aish1@cluster0.xrzt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//we use mongoose to connect to outr database
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`)))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);