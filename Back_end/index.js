// import module
import "dotenv/config"
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import { router } from "./controller/route.js";
const app = express();


// connect to mongodb
connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("SUCCES CONNECT TO MONGODB IN: http://localhost:4000");
    }).catch(() => {
        console.log("FAILED");
    });


// middleware
app.use(cors(
    {
        origin: ["https://cheat-game-ps2.vercel.app"],
        credentials: true,
    }
));
app.use(json());
app.use(urlencoded({ extended: false }))
app.use("/api/", router);
app.listen(4000);
