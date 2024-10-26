

import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
   
    name:{
        type: String,
        required: true,
        minLength: [3, "Name must be contain at least 3 characters"],
        maxLength: [30, "Name cannot excees 30 characters"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Enter Valid email"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone number must be at least 10 Digits"],
        maxLength: [15, "Phone number cannot excees 15 Digits"]
    },
    message:{
        type: String,
        required: true,
        minLength: [10, "Message must be at least 10 characters"],
        maxLength: [500, "Message cannot excees 500 characters"]
        },
   
});

export const Message = mongoose.model("Message", messageSchema);
