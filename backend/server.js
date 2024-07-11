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
    const userCollection = database.collection('staff');

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

app.get('/api/staff', async (req, res) => {
  try {
    const database = client.db('abc_telephone_directory');
    const staffCollection = database.collection('staff');
    const departmentCollection = database.collection('department');

    const staff = await staffCollection.find({}).toArray();
    const departments = await departmentCollection.find({}).toArray();

    if (departments.length === 0) {
      // If departments collection is empty, populate it
      const departmentCounts = staff.reduce((acc, staffMember) => {
        if (!acc[staffMember.department]) {
          acc[staffMember.department] = 0;
        }
        acc[staffMember.department]++;
        return acc;
      }, {});

      const departmentDocuments = Object.keys(departmentCounts).map(department => ({
        name: department,
        employeeCount: departmentCounts[department],
      }));

      await departmentCollection.insertMany(departmentDocuments);
    }

    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/staff', async (req, res) => {
  const { name, department, internalNumber, password } = req.body;

  try {
    const database = client.db('abc_telephone_directory');
    const staffCollection = database.collection('staff');
    const departmentCollection = database.collection('department');

    const result = await staffCollection.insertOne({ name, department, internalNumber, password });

    // Update department count
    const departmentData = await departmentCollection.findOne({ name: department });
    if (departmentData) {
      await departmentCollection.updateOne(
        { name: department },
        { $inc: { employeeCount: 1 } }
      );
    } else {
      await departmentCollection.insertOne({ name: department, employeeCount: 1 });
    }

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
    const departmentCollection = database.collection('department');

    const staffMember = await staffCollection.findOne({ _id: ObjectId(id) });

    if (!staffMember) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const result = await staffCollection.deleteOne({ _id: ObjectId(id) });

    // Update department count
    const departmentData = await departmentCollection.findOne({ name: staffMember.department });
    if (departmentData && departmentData.employeeCount > 0) {
      await departmentCollection.updateOne(
        { name: staffMember.department },
        { $inc: { employeeCount: -1 } }
      );
    }

    res.status(204).send(); // Success, no content response
  } catch (err) {
    console.error('Error deleting employee:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
