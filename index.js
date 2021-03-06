const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
// console.log(process.env.DB_PASS)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o4xle.mongodb.net/volunteerNetwork?retryWrites=true&w=majority`;

const port = 5000;


const app = express()

app.use(cors());
app.use(bodyParser.json());

// const password = "volunteer191network";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });


client.connect(err => {
  const dataCollection = client.db("volunteerNetwork").collection("donation");
  
  app.post('/addRegisterData',(req, res) => {
      const registerData = req.body;
      dataCollection.insertOne(registerData)
      .then(result => {
        res.send(result.insertedCount > 0);
      })
      console.log(registerData);
  })
  app.get('/registration', (req, res) =>{
    dataCollection.find({})
    .toArray((err, documents) =>{
      res.send (documents);
    })
  })

  // app.post('/addFakeData', (req, res) =>{
  //   const fakeDataUse = req.body;
  //   dataCollection.insertOne(fakeDataUse)
  //     .then(result => {
  //       res.send(result.insertedCount > 0);
  //     })
  //   console.log(fakeDataUse);
  // })
 
  // app.get('/fakeDataUse',(req, res)=>{
  //   dataCollection.find({})
  //   .toArray((err, documents) =>{
  //     res.send (documents);
  //   })
  // })

});


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(process.env.PORT || port)