const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const database = 'employees'
const client = new MongoClient(url);

async function dbconnect()
{
  let result = await client.connect();
  let db=result.db(database)
  let collection = db.collection('managers');
  return collection;
}

dbconnect().then((collection) => {
  console.warn(collection.find().toArray());
});

console.log("Hello World!!");
