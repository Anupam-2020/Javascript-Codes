import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
    {
        // fields to be added...
    },
    {timestamps: true}
)

export const Hospital = mongoose.model('Hospital', hospitalSchema);