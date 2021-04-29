// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import postRoutes from './routes/posts.js';
// import userRouter from "./routes/user.js";
// const app = express();
// dotenv.config();

// app.use(bodyParser.json({limit:"30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
// app.use(cors());

// //every route inside the postRoutes will start with 'posts
// app.use('/posts', postRoutes);
// app.use("/user", userRouter);

// //connecting app to database(mongoDB)
// // const CONNECTION_URL = 'mongodb+srv://aishwarya-singh04:@Me_aish1@cluster0.xrzt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// //const CONNECTION_URL='mongodb+srv://aishwarya-singh04:aishwarya123@cluster0.xrzt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// //const CONNECTION_URL = 'mongodb+srv://simran_maurya:Simran123@cluster0.cadsp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const CONNECTION_URL = 'mongodb+srv://aishwaryasingh04:aishwarya123@cluster0.od2sy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// //we use mongoose to connect to outr database
// mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=> app.listen(PORT, ()=> console.log(`Server running on port : ${PORT}`)))
//     .catch((error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false);





import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://simran_maurya:Simran123@cluster0.cadsp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);