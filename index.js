const express = require('express')
const app = express()
const port = 5000;

const password = "volunteer191network";


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://volunteer191:volunteer191network@cluster0.o4xle.mongodb.net/volunteerNetwork?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("volunteerNetwork").collection("donation");
  // perform actions on the collection object
  console.log('db connected successfully')
  client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)