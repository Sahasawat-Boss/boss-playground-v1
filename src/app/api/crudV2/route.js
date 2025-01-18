import { MongoClient } from "mongodb";

const connectToDatabase = async () => {
    const uri = process.env.MONGODB_URI; // MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db("sampleData"); // Your DB name
    const collection = database.collection("CRUDv2"); // Your collection name
    return { client, collection };
};

export async function GET(request) {
    const { client, collection } = await connectToDatabase();
    try {
        const crudv2Data = await collection.find({}).toArray();
        return new Response(JSON.stringify({ crudv2Data }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching crudv2 data:", error);
        return new Response("Failed to fetch data", { status: 500 });
    } finally {
        client.close();
    }
};

export async function POST(request) {
    const { client, collection } = await connectToDatabase();
    try {
        const body = await request.json(); // Parse the incoming JSON data
        const result = await collection.insertOne(body); // Insert the data into MongoDB
        return new Response(
            JSON.stringify({ message: "Data added successfully", insertedId: result.insertedId }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error adding data to CRUDv2:", error);
        return new Response("Failed to add data", { status: 500 });
    } finally {
        client.close();
    }
}
