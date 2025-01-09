// src/app/api/sampleData/route.js

import { MongoClient } from "mongodb";

// Fetch data from MongoDB (server-side)
const fetchData = async () => {
    const uri = process.env.MONGODB_URI; // MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db("sampleData"); // Your DB name
        const collection = database.collection("sampleData"); // Your collection name

        const sampleData = await collection.find({}).toArray();
        return sampleData;
    } catch (error) {
        console.error("Error fetching Sampledata from MongoDB:", error);
        return [];
    } finally {
        client.close();
    }
};

// API route handler
export async function GET(req) {
    const data = await fetchData();
    return new Response(JSON.stringify({ sampleData: data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
