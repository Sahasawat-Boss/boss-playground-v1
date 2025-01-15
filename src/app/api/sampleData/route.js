import { MongoClient } from "mongodb";

// MongoDB connection function
const connectToDatabase = async () => {
    const uri = process.env.MONGODB_URI; // MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db("sampleData"); // Your DB name
    const collection = database.collection("sampleData"); // Your collection name
    return { client, collection };
};

// API route handler
export async function GET(req) {
    const { client, collection } = await connectToDatabase();
    try {
        const sampleData = await collection.find({}).toArray();
        return new Response(JSON.stringify({ sampleData }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching sample data:", error);
        return new Response("Failed to fetch data", { status: 500 });
    } finally {
        client.close();
    }
}

export async function POST(req) {
    const { client, collection } = await connectToDatabase();
    try {
        const newRecord = await req.json(); // Get the data from the request body
        const result = await collection.insertOne(newRecord);
        return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error inserting data:", error);
        return new Response("Failed to insert data", { status: 500 });
    } finally {
        client.close();
    }
}
