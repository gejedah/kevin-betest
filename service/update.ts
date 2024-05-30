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
export default async function updateUserData(payload: payload): Promise<any> {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('db_kevin_betest');
        const collection = database.collection('Users');
        const result = await collection.insertOne(payload);
        console.log(`Update document with _id`);
        return result.insertedId;
    } finally {
        await client.close();
    }
}