import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure your MongoDB URI is set in the .env file
const client = new MongoClient(uri);

export async function POST(req) {
    try {
        await client.connect();
        const database = client.db("PIS"); // Replace with your database name
        const collection = database.collection("pis_db"); // Replace with your collection name

        const body = await req.json(); // Parse the incoming JSON request body

        // Insert the document into the collection
        const result = await collection.insertOne(body);

        return new Response(
            JSON.stringify({ success: true, message: "Data saved successfully", data: result }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error saving data:", error);
        return new Response(
            JSON.stringify({ success: false, message: "Failed to save data" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    } finally {
        await client.close();
    }
}
