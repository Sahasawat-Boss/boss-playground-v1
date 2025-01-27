import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure your MongoDB connection string is set in .env
const client = new MongoClient(uri);

export async function GET(req) {
    try {
        await client.connect();
        const database = client.db("PIS"); // Replace with your database name
        const collection = database.collection("pis_db"); // Replace with your collection name

        // Fetch all documents from the collection
        const documents = await collection.find({}).toArray();

        if (!documents.length) {
            return new Response(JSON.stringify({ success: false, message: "No data found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ success: true, data: documents }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(JSON.stringify({ success: false, message: "Failed to fetch data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    } finally {
        await client.close();
    }
}
