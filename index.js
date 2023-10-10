const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const database  = 'employees'
const client = new MongoClient(url);

async function dbconnect()
{
    let result = await client.connect();
    let db=result.db(database)
    let collection = db.collection('managers');
   // let response = await collection.find({}).toArray();
   // console.log(Data);
}
dbconnect().then((resp) => {
    console.warn(resp.find().toArray())
});