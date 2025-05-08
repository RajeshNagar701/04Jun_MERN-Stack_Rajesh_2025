
// npm i mongodb



// MongoDB Connection
const {MongoClient} = require('mongodb')   // import mongodb 
const conn= new MongoClient('mongodb://localhost:27017');  


async function getData()
{
    let result = await conn.connect();
    db= result.db('beaidal');
    collection = db.collection('contact');
    let data = await collection.find({}).toArray(); // fetch all data
    console.log(data);
}
getData();

