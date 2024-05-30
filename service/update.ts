import { MongoClient, ObjectId } from 'mongodb';
const lodash = require('lodash');

type payload = {
    userName: string,
    accountNumber: string,
    emailAddress: string,
    identityNumber: string
}

/**
 * 
 * @param id
 * @param payload
 * @returns
 */
export async function updateUserData(id: string, payload: payload): Promise<any> {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);
    // const { userName,
    //     accountNumber,
    //     emailAddress,
    //     identityNumber } = payload;

    try {
        await client.connect();

        const database = client.db('db_kevin_betest');
        const collection = database.collection('Users');
        const updateQuery = { Id: new ObjectId(id) };
        const updateDocument = { $set: lodash.omit(payload, ['Id']) };
        const updateResult = await collection.updateOne(updateQuery, updateDocument);
        console.log(`Update document with _id`);
        return updateResult.modifiedCount;
    } finally {
        await client.close();
    }
}