const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/sampledb')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// Routes
app.get('/', (_req, res) => {
  res.json({ message: 'OK' });
});

app.get("/api/webhookResponse",(req,res)=>{
    console.log("Webhook response received:", req.query);
    res.json({message:"Webhook response received"});
})

app.get("api/testApi",(req,res)=>{
    console.log("Test API called");
    res.json({message:"Test API called"});
})

module.exports = app;
