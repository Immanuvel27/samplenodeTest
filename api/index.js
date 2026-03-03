const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'OK from Vercel 🚀' });
});

app.get('/api/testApi', (req, res) => {
  res.json({ message: 'Test API working' });
});
app.post('/api/webhookResponse', (req, res) => {
  console.log("Webhook response received:", req);
  res.json({ message: "Webhook response received" });
});

module.exports = app;