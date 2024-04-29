import { CHAT_KOLEKSI } from "../model/chatGlobal.js"
import { REP_KOLEKSI, REQ_KOLEKSI } from './../model/reportAndRequest.js';






// ini cuma untuk testing
export function Root(req, res) {
    res.json({ message: "ini berhasil" })
}



// READ
export function ReadChatGlobal(req, res) {
    CHAT_KOLEKSI.find()
        .then((db) => {
            res.json(db)
        })
}



// CREATE (MENGIRIMKAN LAPORAN DARI FORM)
export function SendReport(req, res) {
    REP_KOLEKSI.create(req.body)
        .then(() => {
            res.send("OK GES BERHASIL TERIKIM")
        })
        .catch(() => {
            res.send("FAILED")
        })
};



// CREATE (MENGIRIMKAN REQUEST DARI FORM)
export function SendRequest(req, res) {
    REQ_KOLEKSI.create(req.body)
        .then(() => {
            res.send("OK GES BERHASIL TERIKIM")
        })
        .catch(() => {
            res.send("FAILED")
        })
};



// CREATE (MENGIRIMKAN PESAN DARI CHAT GLOBAL)
export function ChatGlobal(req, res) {
    CHAT_KOLEKSI.create(req.body)
        .then(() => {
            res.send("OK GES BERHASIL TERIKIM")
        })
        .catch(() => {
            res.send("FAILED")
        })
};