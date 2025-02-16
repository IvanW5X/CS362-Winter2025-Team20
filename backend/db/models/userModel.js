/********************************************************************
 * File Name: userModel.js
 * Date: 2/15/2025
 * Description: Fie for user schema
 * Author(s): CS 362-Team 20
 ********************************************************************/

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    CustomerID: { type: Number, unique: true, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Should be hashed before saving
    dob: { type: Date },
    Fname: { type: String, required: true },
    Mname: { type: String },
    Lname: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', userSchema);