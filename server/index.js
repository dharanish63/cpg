require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
app.use(express.json())

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

/**** Colleges */
const getColleges = require('./routes/getColleges');
const createCollege = require('./routes/createCollege');
const updateCollege = require('./routes/updateCollege');
const deleteCollege = require('./routes/deleteCollege');
const getCollegeById = require('./routes/getCollegeById');
const searchCollege = require('./routes/searchCollege');

app.use('/college', getColleges);
app.use('/college', createCollege);
app.use('/college', updateCollege);
app.use('/college', deleteCollege);
app.use('/searchcollege', searchCollege);
app.use('/college', getCollegeById);

/**** Employees */
const getEmployees = require('./routes/getEmployees');
const createEmployee = require('./routes/createEmployee');
const updateEmployee = require('./routes/updateEmployee');
const deleteEmployee = require('./routes/deleteEmployee');
const getEmployeeById = require('./routes/getEmployeeById');
const searchEmployee = require('./routes/searchEmployee');

app.use('/employee', getEmployees);
app.use('/employee', createEmployee);
app.use('/employee', updateEmployee);
app.use('/employee', deleteEmployee);
app.use('/searchemployee', searchEmployee);
app.use('/employee', getEmployeeById);

app.listen(3100, ()=>console.log('server started in port 3100'));
