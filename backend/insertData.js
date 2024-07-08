const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('abc_telephone_directory');

    // Create and insert data into department collection
    const departmentCollection = database.collection('employeeSignup');
    await departmentCollection.insertMany([
      { name: "John", email: "john@gmail.com", password: "1234" },
      { name: "Hehe", email: "hehe@gmail.com", password: "1234" }
    ]);

    console.log("Data inserted successfully!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
