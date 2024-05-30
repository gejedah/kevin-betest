import { MongoClient } from 'mongodb';

type payload = {
    Id: string,
    userName: string,
    accountNumber: string,
    emailAddress: string,
    identityNumber: string
}

/**
 * 
 * @param payload
 * @returns
 */
export default async function createUserData(payload: payload) {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('mydb');
        const collection = database.collection('mycollection');
        const result = await collection.insertOne(payload);
        console.log(`Inserted document with _id`);
        return result.insertedId;
    } finally {
        await client.close();
    }
}