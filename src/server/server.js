const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: '../../.env'});
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

//DB Connection
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(con => console.log('MongoDB Connected'))
  .catch(err => {
    console.log('Connection to Database Failed!');
    console.log(err.message);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App Running on Port ${port}`);
});
