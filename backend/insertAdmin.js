const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('abc_telephone_directory');

    // Create and insert data into admin collection
    const adminCollection = database.collection('admin');
    await adminCollection.insertOne({
      username: "admin1",
      password: "password123"
    });

    console.log("Admin inserted successfully!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
