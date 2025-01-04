import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "user", 
            // `required: false` is unnecessary because it's optional by default
        },
    },
    { timestamps: true }
);

// Export the model
const User = mongoose.models.User || mongoose.model("User", userSchema);
// Check if the model is already create use mongoose.models.User
//if not create > create mongoose.model("User", userSchema)
export default User;
