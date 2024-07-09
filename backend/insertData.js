const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb+srv://ramakantasahoo1202:IslyDSoTTluunVy0@cluster0.xmiv8zu.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('abc_telephone_directory');

    // Create and insert data into department collection
    const departmentCollection = database.collection('staff');
    await departmentCollection.insertMany([
      { name: "Ravi Sharma", department: "Communication", internalNumber: "2001" },
      { name: "Suman Gupta", department: "CAM", internalNumber: "2002" },
      { name: "Anil Mehta", department: "Flight Safety", internalNumber: "2003" },
      { name: "Meera Patel", department: "HR", internalNumber: "2004" },
      { name: "Prakash Verma", department: "Communication", internalNumber: "2005" },
      { name: "Seema Joshi", department: "Finance", internalNumber: "2006" },
      { name: "Harish Reddy", department: "Operations", internalNumber: "2007" },
      { name: "Rajiv Nair", department: "Marketing", internalNumber: "2008" },
      { name: "Rina Kapoor", department: "Logistics", internalNumber: "2009" },
      { name: "Deepa Desai", department: "Procurement", internalNumber: "2010" },
      { name: "Vikas Singh", department: "Sales", internalNumber: "2011" },
      { name: "Nisha Kumar", department: "Customer Service", internalNumber: "2012" },
      { name: "Alok Pandey", department: "Legal", internalNumber: "2013" },
      { name: "Ritika Thakur", department: "Research", internalNumber: "2014" },
      { name: "Ajay Jain", department: "Flight Safety", internalNumber: "2015" },
      { name: "Kiran Khanna", department: "Communication", internalNumber: "2016" },
      { name: "Naveen Mishra", department: "HR", internalNumber: "2017" },
      { name: "Swati Deshmukh", department: "Finance", internalNumber: "2018" },
      { name: "Amit Bansal", department: "CAM", internalNumber: "2019" },
      { name: "Geeta Rao", department: "Communication", internalNumber: "2020" }
    ]);
    
    

    console.log("Data inserted successfully!");
  } finally {
    await client.close();
  }
}

main().catch(console.error);
