import { MongoClient } from 'mongodb';

type payload = {
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
export default async function createUserData(payload: payload): Promise<any> {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('db_kevin_betest');
        const collection = database.collection('Users');
        await collection.createIndex({ id: 1 }, { unique: true });
        const result = await collection.insertOne(payload);
        console.log(`Inserted document with _id`);
        return result.insertedId;
    } finally {
        await client.close();
    }
}