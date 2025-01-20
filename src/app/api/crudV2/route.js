import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const connectToDatabase = async () => {
    const uri = process.env.MONGODB_URI; // MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db("sampleData"); // Your DB name
    const collection = database.collection("CRUDv2"); // Your collection name
    return { client, collection };
};

//todo: GET
export async function GET(request) {
    const { client, collection } = await connectToDatabase();
    try {
        const url = new URL(request.url);
        const name = url.searchParams.get("name");
        const status = url.searchParams.get("status");

        // Construct filter object
        const filter = {};
        if (name) {
            filter.name = { $regex: name, $options: "i" }; // Case-insensitive partial match
        }
        if (status) {
            filter.status = status; // Exact match
        }

        const crudv2Data = await collection.find(filter).toArray();

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
}

//todo: POST
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

//todo: DELETE
export async function DELETE(request) {
    const { client, collection } = await connectToDatabase();
    try {
        const { ids } = await request.json(); // Parse the incoming JSON data
        if (!Array.isArray(ids)) {
            return new Response("Invalid data format", { status: 400 });
        }

        // Convert string IDs to MongoDB ObjectIds
        const objectIds = ids.map((id) => new ObjectId(id));

        // Perform the delete operation
        const result = await collection.deleteMany({ _id: { $in: objectIds } });

        return new Response(
            JSON.stringify({ message: "Data deleted successfully", deletedCount: result.deletedCount }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error deleting data:", error);
        return new Response("Failed to delete data", { status: 500 });
    } finally {
        client.close();
    }
}

