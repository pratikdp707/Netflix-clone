require('dotenv').config();
const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')
const cors = require('cors')
const port = process.env.PORT || 4000;

app.use(cors({
    origin: "*"
}));
//Connecting with database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('DB Connection Successfull');
}).catch((error) => {
    console.log(error);
})

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movie', movieRoute)
app.use('/api/list', listRoute);

app.listen(port, () => {
    console.log("Server is running on port 4000"); 
})
