import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:alura123@alura.gb5bg.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;