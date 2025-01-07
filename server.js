require('dotenv').config();

const express =require('express');

const app =express();
const  cors =require('cors');
const corseOptions=require('./Config/corsOptions')

const cookieParser =require('cookie-parser');
const credentials = require('./middleware/credentials');

const mongoose = require('mongoose');
const connectDB =require('./Config/dbConn');

const PORT = process.env.PORT || 3500 ;


//Connect to MongoDB
connectDB();

//Handle options credentials check-brfore cors
//and fetch cookies credentials requirement
app.use(credentials);

///cross access
app.use(cors(corseOptions));

//built middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());


app.use('/employees' , require('./router/api/Employees')); 
app.use('/departments' , require('./router/api/Departments'));



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}); 
 