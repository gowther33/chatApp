const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://yarooq1:uYmAHPXUovjWkqwX@cluster0.wjm3szj.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
