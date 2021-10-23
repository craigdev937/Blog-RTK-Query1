import express from "express";
import { CreatePost, GetOnePost, FetchAllPosts, 
    UpdatePost, DeletePost } from "../controllers/postCon";

export const postRt: express.Router = express.Router();
    postRt.post("/posts", CreatePost);
    postRt.get("/posts", FetchAllPosts);
    postRt.get("/posts/:id", GetOnePost);
    postRt.put("/posts/:id", UpdatePost);
    postRt.delete("/posts/:id", DeletePost);

    





