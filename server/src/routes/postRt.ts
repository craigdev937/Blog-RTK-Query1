import express from "express";
import { HomeIndex } from "../controllers/postCon";

export const postRt: express.Router = express.Router();
    postRt.get("/", HomeIndex);





