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

app.post('/api/user/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const database = client.db('abc_telephone_directory');
    const userCollection = database.collection('employeeSignup');

    const user = await userCollection.findOne({ name });

    if (!user) {
      console.log(`User not found: ${name}`);
      return res.status(401).json({ message: 'Invalid name or password' });
    }

    if (user.password !== password) {
      console.log(`Invalid password for user: ${name}`);
      return res.status(401).json({ message: 'Invalid name or password' });
    }

    const token = jwt.sign({ name: user.name }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Server error:', err);
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
