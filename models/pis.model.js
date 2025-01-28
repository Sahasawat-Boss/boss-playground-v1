// this one from Youtube
// a property that need to send to MongoDb for display image

import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        image_url: String,//for display image from cloundinary
        url: String,//for display image from cloundinary
        public_ulr: String,//for display image from cloundinary
        //---//
        public_id: String, //for edit delete image in cloundinary

    },
    { timestamps: true }
);

export const Image
    = mongoose.models.Image || mongoose.model("Image", imageSchema);