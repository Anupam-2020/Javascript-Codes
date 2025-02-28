import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    pincode: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: { // M-1 for order-items.
        type: [OrderItemSchema]
    },
    // orderItems: [
    //     { // M-2 for order-items.
    //         productId: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "Product"
    //         },
    //         quantity: {
    //             type: Number,
    //             required: true
    //         }
    //     },
    // ],
    address: {
        type: addressSchema,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema);