import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure your MongoDB URI is set in .env
const client = new MongoClient(uri);

export async function POST(req) {
    try {
        await client.connect();
        const database = client.db("PIS"); // Database name
        const collection = database.collection("pis_db"); // Collection name

        const body = await req.json(); // Parse JSON request body

        // Insert a new document
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

// ✅ New: Update Task Status & Add Comment
export async function PUT(req) {
    try {
        await client.connect();
        const database = client.db("PIS");
        const collection = database.collection("pis_db");

        const { id, comment } = await req.json(); // Expecting { id: "task_id", comment: "some comment" }

        if (!id) {
            return new Response(
                JSON.stringify({ success: false, message: "Task ID is required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Update task status & add comment
        const result = await collection.updateOne(
            { _id: new ObjectId(id) }, // Find by ID
            { $set: { status: "Completed", comment: comment || "No comments provided" } }
        );

        return new Response(
            JSON.stringify({ success: true, message: "Task updated successfully", data: result }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error updating task:", error);
        return new Response(
            JSON.stringify({ success: false, message: "Failed to update task" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    } finally {
        await client.close();
    }
}
