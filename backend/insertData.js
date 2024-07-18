const { MongoClient } = require('mongodb');

function generateRandomPassword() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function main() {
  const uri = "mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('abc_telephone_directory');

    // Create and insert data into department collection
    const departmentCollection = database.collection('staff');
    await departmentCollection.insertMany([
      { name: "Aarav Kapoor", department: "A", internalNumber: "3045"},
      { name: "Priya Reddy", department: "B", internalNumber: "4876"},
      { name: "Rohan Sharma", department: "C", internalNumber: "2917"},
      { name: "Sanya Mehta", department: "A", internalNumber: "3568"},
      { name: "Karan Verma", department: "E", internalNumber: "4821"},
      { name: "Meera Joshi", department: "B", internalNumber: "5274"},
      { name: "Vikram Singh", department: "D", internalNumber: "6182"},
      { name: "Ananya Gupta", department: "C", internalNumber: "7345"},
      { name: "Rakesh Rao", department: "A", internalNumber: "8492"},
      { name: "Sonal Desai", department: "A", internalNumber: "9513"},
      { name: "Anil Bansal", department: "B", internalNumber: "1046"},
      { name: "Deepak Kumar", department: "C", internalNumber: "2173"},
      { name: "Neha Khanna", department: "E", internalNumber: "3289"},
      { name: "Tarun Nair", department: "D", internalNumber: "4391"},
      { name: "Kavya Thakur", department: "A", internalNumber: "5920"},
      { name: "Manish Jain", department: "B", internalNumber: "6834"},
      { name: "Ritu Mishra", department: "E", internalNumber: "7045"},
      { name: "Arjun Deshmukh", department: "E", internalNumber: "8193"},
      { name: "Pooja Pandey", department: "D", internalNumber: "9201"},
      { name: "Nitin Rao", department: "C", internalNumber: "1356"}
    ]);

    console.log("Data inserted successfully!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
