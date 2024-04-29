import { Schema, model } from "mongoose";

const dataSchema = new Schema({
    nama: String,
    message: String,
    date: String
}, {
    versionKey: false // menghilangkan __v di database mongodb
});

export const CHAT_KOLEKSI = model('chat-globals', dataSchema);