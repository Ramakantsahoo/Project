const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;
const uri = "mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/"; // Adjust as needed
const client = new MongoClient(uri);

app.use(cors());
app.use(bodyParser.json());

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to database');
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();

app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const database = client.db('abc_telephone_directory');
    const adminCollection = database.collection('admin');

    const admin = await adminCollection.findOne({ username });

    if (admin && admin.password === password) {
      const token = jwt.sign({ username: admin.username }, 'secret_key', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/staff', async (req, res) => {
    try {
      const database = client.db('abc_telephone_directory');
      const staffCollection = database.collection('staff');
  
      const staff = await staffCollection.find({}).toArray();
      res.json(staff);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
