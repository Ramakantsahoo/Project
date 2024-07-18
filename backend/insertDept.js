const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('abc_telephone_directory');

    // Create and insert data into department collection
    const departmentCollection = database.collection('department');
    await departmentCollection.insertMany([
      { name: "A" },
      { name: "B" },
      { name: "C" },
      { name: "D" },
      { name: "E" }
    ]);

    console.log("Departments inserted successfully!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
