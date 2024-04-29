import { Schema, model } from "mongoose";

const dataSchema = new Schema({
    nama: String,
    email: String,
    komentar: String
}, {
    versionKey: false // menghilangkan __v di database mongodb
});

export const REQ_KOLEKSI = model('requests', dataSchema);
export const REP_KOLEKSI = model('reports', dataSchema);