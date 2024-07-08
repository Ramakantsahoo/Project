const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;
const uri = "mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/";
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


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
      return res.sendStatus(401); // Unauthorized if token is missing
  }

  jwt.verify(token, 'secret_key', (err, user) => {
      if (err) {
          return res.sendStatus(403); // Forbidden if token is invalid
      }
      req.user = user;
      next(); // Pass the execution to the next middleware
  });
}

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

app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const database = client.db('abc_telephone_directory');
      const employeeSignupCollection = database.collection('employeeSignup');
  
      await employeeSignupCollection.insertOne({ name, email, password });
  
      res.status(201).json({ message: 'User registered successfully' });
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

  app.post('/api/staff', async (req, res) => {
    const { name, department, internalNumber } = req.body;

    try {
        const database = client.db('abc_telephone_directory');
        const staffCollection = database.collection('staff');

        const result = await staffCollection.insertOne({ name, department, internalNumber });
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.delete('/api/staff/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const database = client.db('abc_telephone_directory');
      const staffCollection = database.collection('staff');

      const result = await staffCollection.deleteOne({ _id: ObjectId(id) });

      if (result.deletedCount === 1) {
          res.status(204).send(); // Success, no content response
      } else {
          res.status(404).json({ message: 'Employee not found' });
      }
  } catch (err) {
      console.error('Error deleting employee:', err);
      res.status(500).json({ message: 'Server error' });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
