const express = require('express');
const app = express();

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const questions = require('./routes/api/questions');

// routes imported here

app.use(express.json());

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo is up'))
    .catch(err => console.log(err));

    
app.get('/', (req, res) => res.send('This works, huzzah!'));
app.use('/api/questions', questions);

// app.use additional routes here

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`));