import { MongoClient, ObjectId } from 'mongodb';
import * as lodash from 'lodash';

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
    // const { userName,
    //     accountNumber,
    //     emailAddress,
    //     identityNumber } = payload;

    try {
        await client.connect();

        const database = client.db('db_kevin_betest');
        const collection = database.collection('Users');
        const updateQuery = { Id: new ObjectId(payload.Id) };
        const updateDocument = { $set: lodash.omit(payload, ['Id']) };
        const updateResult = await collection.updateOne(updateQuery, updateDocument);
        console.log(`Update document with _id`);
        return updateResult.modifiedCount;
    } finally {
        await client.close();
    }
}