const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://mernchat-yt-user:5Qp3w6P8QCX0RyF9@cluster0.rgfwyzs.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
