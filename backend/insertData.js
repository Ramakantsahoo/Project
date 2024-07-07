// Import necessary modules
const { MongoClient } = require('mongodb');

// MongoDB Connection URI
const uri = 'mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/'; 
const dbName = 'abc_telephone_directory'; // Replace with your database name
const collectionName = 'staff'; // Replace with your collection name

// Sample data to insert (10 unique staff entries)
const dataToInsert = [
  {
    name: 'John Doe',
    department: 'Engineering',
    internal_number: '1234'
  },
  {
    name: 'Jane Smith',
    department: 'Marketing',
    internal_number: '5678'
  },
  {
    name: 'Michael Johnson',
    department: 'Sales',
    internal_number: '9012'
  },
  {
    name: 'Emily Brown',
    department: 'HR',
    internal_number: '3456'
  },
  {
    name: 'David Lee',
    department: 'Finance',
    internal_number: '7890'
  },
  {
    name: 'Sarah Clark',
    department: 'Operations',
    internal_number: '2345'
  },
  {
    name: 'Kevin Wilson',
    department: 'Customer Support',
    internal_number: '6789'
  },
  {
    name: 'Rachel Green',
    department: 'Public Relations',
    internal_number: '4321'
  },
  {
    name: 'Mark Taylor',
    department: 'Legal',
    internal_number: '8765'
  },
  {
    name: 'Lisa Anderson',
    department: 'Research & Development',
    internal_number: '2109'
  }
];

// Function to insert data
async function insertData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Inserting data
    const result = await collection.insertMany(dataToInsert);
    console.log(`${result.insertedCount} documents inserted`);

  } catch (error) {
    console.error('Error inserting documents:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Call the insertData function
insertData();
