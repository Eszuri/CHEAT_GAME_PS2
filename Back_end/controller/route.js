import express from "express";
import { ChatGlobal, ReadChatGlobal, Root, SendReport, SendRequest } from "./controller.js";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());


router.get('/', Root);
router.get('/read-chat-global', ReadChatGlobal);
router.post('/send-report', SendReport);
router.post('/send-request', SendRequest);
router.post('/chat-global', ChatGlobal);

export { router };