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
      { name: "Aarav Kapoor", department: "A", internalNumber: "3045", password: generateRandomPassword() },
      { name: "Priya Reddy", department: "B", internalNumber: "4876", password: generateRandomPassword() },
      { name: "Rohan Sharma", department: "C", internalNumber: "2917", password: generateRandomPassword() },
      { name: "Sanya Mehta", department: "A", internalNumber: "3568", password: generateRandomPassword() },
      { name: "Karan Verma", department: "E", internalNumber: "4821", password: generateRandomPassword() },
      { name: "Meera Joshi", department: "B", internalNumber: "5274", password: generateRandomPassword() },
      { name: "Vikram Singh", department: "D", internalNumber: "6182", password: generateRandomPassword() },
      { name: "Ananya Gupta", department: "C", internalNumber: "7345", password: generateRandomPassword() },
      { name: "Rakesh Rao", department: "A", internalNumber: "8492", password: generateRandomPassword() },
      { name: "Sonal Desai", department: "A", internalNumber: "9513", password: generateRandomPassword() },
      { name: "Anil Bansal", department: "B", internalNumber: "1046", password: generateRandomPassword() },
      { name: "Deepak Kumar", department: "C", internalNumber: "2173", password: generateRandomPassword() },
      { name: "Neha Khanna", department: "E", internalNumber: "3289", password: generateRandomPassword() },
      { name: "Tarun Nair", department: "D", internalNumber: "4391", password: generateRandomPassword() },
      { name: "Kavya Thakur", department: "A", internalNumber: "5920", password: generateRandomPassword() },
      { name: "Manish Jain", department: "B", internalNumber: "6834", password: generateRandomPassword() },
      { name: "Ritu Mishra", department: "E", internalNumber: "7045", password: generateRandomPassword() },
      { name: "Arjun Deshmukh", department: "E", internalNumber: "8193", password: generateRandomPassword() },
      { name: "Pooja Pandey", department: "D", internalNumber: "9201", password: generateRandomPassword() },
      { name: "Nitin Rao", department: "C", internalNumber: "1356", password: generateRandomPassword() }
    ]);

    console.log("Data inserted successfully!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
