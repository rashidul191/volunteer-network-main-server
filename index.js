const express = require('express')
const app = express()
const port = 5000;

const password = "volunteer191network";


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://volunteer191:volunteer191network@cluster0.o4xle.mongodb.net/volunteerNetwork?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)