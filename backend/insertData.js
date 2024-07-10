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
      { name: "Aarav Kapoor", department: "HR", internalNumber: "3045", password: generateRandomPassword() },
      { name: "Priya Reddy", department: "Finance", internalNumber: "4876", password: generateRandomPassword() },
      { name: "Rohan Sharma", department: "Engineering", internalNumber: "2917", password: generateRandomPassword() },
      { name: "Sanya Mehta", department: "HR", internalNumber: "3568", password: generateRandomPassword() },
      { name: "Karan Verma", department: "Finance", internalNumber: "4821", password: generateRandomPassword() },
      { name: "Meera Joshi", department: "Engineering", internalNumber: "5274", password: generateRandomPassword() },
      { name: "Vikram Singh", department: "HR", internalNumber: "6182", password: generateRandomPassword() },
      { name: "Ananya Gupta", department: "Finance", internalNumber: "7345", password: generateRandomPassword() },
      { name: "Rakesh Rao", department: "Engineering", internalNumber: "8492", password: generateRandomPassword() },
      { name: "Sonal Desai", department: "HR", internalNumber: "9513", password: generateRandomPassword() },
      { name: "Anil Bansal", department: "Finance", internalNumber: "1046", password: generateRandomPassword() },
      { name: "Deepak Kumar", department: "Engineering", internalNumber: "2173", password: generateRandomPassword() },
      { name: "Neha Khanna", department: "HR", internalNumber: "3289", password: generateRandomPassword() },
      { name: "Tarun Nair", department: "Finance", internalNumber: "4391", password: generateRandomPassword() },
      { name: "Kavya Thakur", department: "Engineering", internalNumber: "5920", password: generateRandomPassword() },
      { name: "Manish Jain", department: "HR", internalNumber: "6834", password: generateRandomPassword() },
      { name: "Ritu Mishra", department: "Finance", internalNumber: "7045", password: generateRandomPassword() },
      { name: "Arjun Deshmukh", department: "Engineering", internalNumber: "8193", password: generateRandomPassword() },
      { name: "Pooja Pandey", department: "HR", internalNumber: "9201", password: generateRandomPassword() },
      { name: "Nitin Rao", department: "Finance", internalNumber: "1356", password: generateRandomPassword() }
    ]);

    console.log("Data inserted successfully!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
