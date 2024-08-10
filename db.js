const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017';
mongoose.connect(mongoURL, {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDB connected ");
});
db.on('error', (err) => {
    console.error("MongoDB error is occured",err);
});
db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});

  
// Export mongoose for usage elsewhere
module.exports = mongoose;
