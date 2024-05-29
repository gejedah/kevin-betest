import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { mongoCrud } from './mongoCr';

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
    const document = { name: 'John Doe', age: 30 };
    await mongoCrud('create', document);
    const collection = client.db('mydb').collection('mycollection');
    const foundDocument = await collection.findOne(document);
    expect(foundDocument).toEqual(expect.objectContaining(document));
});

test('Read operation', async () => {
    const document = { name: 'John Doe', age: 30 };
    const collection = client.db('mydb').collection('mycollection');
    const { insertedId } = await collection.insertOne(document);
    const foundDocument = await mongoCrud('read', insertedId);
    expect(foundDocument).toEqual(expect.objectContaining(document));
});

test('Update operation', async () => {
    const document = { name: 'John Doe', age: 30 };
    const newAge = 31;
    const collection = client.db('mydb').collection('mycollection');
    const { insertedId } = await collection.insertOne(document);
    await mongoCrud('update', insertedId, { age: newAge });
    const updatedDocument = await collection.findOne({ _id: insertedId });
    expect(updatedDocument?.age).toBe(newAge);
});

test('Delete operation', async () => {
    const document = { name: 'John Doe', age: 30 };
    const collection = client.db('mydb').collection('mycollection');
    const { insertedId } = await collection.insertOne(document);
    await mongoCrud('delete', insertedId);
    const deletedDocument = await collection.findOne({ _id: insertedId });
    expect(deletedDocument).toBeNull();
});