import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function GET(request) {
    try {
        const dbClient = await clientPromise;
        const database = dbClient.db("PIS");
        const collection = database.collection("pis_db");

        const tasks = await collection.find({}).toArray();
        return new Response(JSON.stringify(tasks), { status: 200 });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return new Response(
            JSON.stringify({ error: "Failed to fetch tasks", details: error.message }),
            { status: 500 }
        );
    }
}
