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

// ✅ New: Update Task Status, Add Comment, and Finished Date
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

        const finishedDate = new Date().toISOString(); // Capture the current timestamp

        // Update task status, add comment, and set finishedDate
        const result = await collection.updateOne(
            { _id: new ObjectId(id) }, // Find by ID
            {
                $set: {
                    status: "Completed",
                    comment: comment || "No comments provided",
                    finishedDate: finishedDate, // Save finished date
                    updatedAt: new Date().toISOString(), // Set updated timestamp
                }
            }
        );

        if (result.matchedCount === 0) {
            return new Response(
                JSON.stringify({ success: false, message: "Task not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "Task updated successfully",
                data: { id, comment, finishedDate },
            }),
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
