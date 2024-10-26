

import mongoose from "mongoose";

const donnerSchema = new mongoose.Schema({
    name: String,
    email: String,
    amount:{
        type: String,
        required: true
    },
    orderId:{
        type: String,
        required: true
    },
    paymentStatus:String,
});

export const Donner = mongoose.model("Donner", donnerSchema);
