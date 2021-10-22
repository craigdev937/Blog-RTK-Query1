import express from "express";
import { CreatePost, DeletePost, FetchAllPosts, GetOnePost, 
    UpdatePost } from "../controllers/postCon";

export const postRt: express.Router = express.Router();
    postRt.post("/", CreatePost);
    postRt.get("/", FetchAllPosts);
    postRt.get("/:id", GetOnePost);
    postRt.put("/:id", UpdatePost);
    postRt.delete("/:id", DeletePost);





