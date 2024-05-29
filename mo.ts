import { MongoClient, ObjectId } from 'mongodb';

async function mongoCrud() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('mydb');
        const collection = database.collection('mycollection');

        // Create
        const document = { name: 'John Doe', age: 30 };
        const result = await collection.insertOne(document);
        console.log(`Inserted document with _id: ${result.insertedId}`);

        // Read
        const query = { _id: new ObjectId('...') };
        const foundDocument = await collection.findOne(query);
        console.log(foundDocument);

        // Update
        const updateQuery = { _id: new ObjectId('...') };
        const updateDocument = { $set: { age: 31 } };
        const updateResult = await collection.updateOne(updateQuery, updateDocument);
        console.log(`Updated ${updateResult.modifiedCount} document(s)`);

        // Delete
        const deleteQuery = { _id: new ObjectId('...') };
        const deleteResult = await collection.deleteOne(deleteQuery);
        console.log(`Deleted ${deleteResult.deletedCount} document(s)`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);