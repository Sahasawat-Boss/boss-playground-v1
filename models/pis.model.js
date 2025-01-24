import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        image_url: String,
        public_id: String,

    },
    { timestamps: true }
);

export const Image
    = mongoose.models.Image || mongoose.model("Image", imageSchema);

// Check if the model is already create use mongoose.models.Image
//if not create > create mongoose.model("Image", imageSchema)

