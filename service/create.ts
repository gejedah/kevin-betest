import { MongoClient } from 'mongodb';

export default async function createUserData(payload) {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('mydb');
        const collection = database.collection('mycollection');

        const document = { name: 'John Doe', age: 30 };
        const result = await collection.insertOne(document);
        console.log(`Inserted document with _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}