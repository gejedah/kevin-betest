import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createUserData } from '../service/create';
import { updateUserData } from '../service/update';
const lodash = require('lodash');

let mongoServer: MongoMemoryServer;
let client: MongoClient;

beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    client = new MongoClient(mongoUri);
    await client.connect();
});

afterAll(async () => {
    await client.close();
    await mongoServer.stop();
});

test('Create operation', async () => {
    const document = {
        userName: 'John Doe',
        accountNumber: '1234567890',
        emailAddress: 'kevin97@gmail.com',
        identityNumber: '123456789113'
    }
    const collection = client.db('mydb').collection('mycollection');
    await createUserData(document);
    const foundDocument = await collection.findOne(document);
    expect(foundDocument).toEqual(expect.objectContaining(document));
});

// test('Read operation', async () => {
//     const document = { name: 'John Doe', age: 30 };
//     const collection = client.db('mydb').collection('mycollection');
//     const { insertedId } = await collection.insertOne(document);
//     const foundDocument = await mongoCrud('read', insertedId);
//     expect(foundDocument).toEqual(expect.objectContaining(document));
// });

test('Update operation', async () => {
    const document = {
        userName: 'John Doe',
        accountNumber: '1234567890',
        emailAddress: 'kevin97@gmail.com',
        identityNumber: '345678911356'
    }
    const userName = 'Jane Doe';
    const collection = client.db('mydb').collection('mycollection');
    const { insertedId } = await collection.insertOne(document);
    lodash.assign(document, { userName });
    await updateUserData(String(insertedId), document);
    const updatedDocument = await collection.findOne({ _id: insertedId });
    expect(updatedDocument?.userName).toBe(userName);
});

// test('Delete operation', async () => {
//     const document = { name: 'John Doe', age: 30 };
//     const collection = client.db('mydb').collection('mycollection');
//     const { insertedId } = await collection.insertOne(document);
//     await mongoCrud('delete', insertedId);
//     const deletedDocument = await collection.findOne({ _id: insertedId });
//     expect(deletedDocument).toBeNull();
// });