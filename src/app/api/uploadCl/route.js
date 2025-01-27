import cloudinary from "../../../../lib/cloudinary";

export async function POST(req) {
    try {
        const body = await req.json();
        const { file } = body;

        const uploadResponse = await cloudinary.uploader.upload(file, {
            folder: 'boss_playground', // Optional: specify folder in Cloudinary
        });

        return new Response(
            JSON.stringify({ success: true, data: uploadResponse,message: 'Upload ' }),
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ success: false, message: 'Upload failed.' }),
            { status: 500 }
        );
    }
}