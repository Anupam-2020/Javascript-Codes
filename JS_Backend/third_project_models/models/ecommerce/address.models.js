import mongoose from "mongoose";


const addressSchema = new mongoose.Schema(
    {
        houseNo: {
            type: String,
            required: true
        },
        street: String,
        area: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true,
            min: [100000, 'PIN Code must be atleast 100000'],
            max: [999999, 'PIN Code must be atmost 999999']
        }
    },
    {timestamps: true}
)

export const Address = mongoose.model('Address', addressSchema);