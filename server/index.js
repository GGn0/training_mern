import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';


// Create an express instance
const App = express();

// Allow cross origin requests.
// PUT THIS BEFORE OTHER SETTINGS!!
App.use(cors());

// Set a (large) limit to the request size (forimages)
App.use(bodyParser.json({limit:"10mb", extended: true}));
App.use(bodyParser.urlencoded({limit:"10mb", extended: true}));

// Connection string to MongoDB Atlass database
// mongodb+srv://nutrition_app:<password>@cluster0.yvpy9.mongodb.net/nutrition?retryWrites=true&w=majority
const MONGO_PASS = fs.readFileSync('./mongo_password', 'utf8');
const CONNECTION_URL = `mongodb+srv://nutrition_app:${MONGO_PASS}@cluster0.yvpy9.mongodb.net/nutrition?retryWrites=true&w=majority`

// Server port (environmental variable if present or port 4000)
const PORT = process.env.PORT || 4000;

// Connect to mongoDB
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(
        // If the onnection is successful
        () => App.listen(PORT, () => console.log(`Server running on por: ${PORT}`))
        
        )
    .catch(
        // If an error happens during connection
        (error) => console.log(error.message)
    );

// Additional mongoose setup
mongoose.set('useFindAndModify', false);