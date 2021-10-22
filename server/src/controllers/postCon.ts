import express from "express";
import { Posts } from "../models/Posts";

export const CreatePost: express.RequestHandler =
async (req, res, next) => {
    try {
        const post: Posts = new Posts();
        post.title = req.body.title;
        post.content = req.body.content;
        post.published = req.body.published;
        post.date = req.body.date;
        await post.save();
        return res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const FetchAllPosts: express.RequestHandler =
async (req, res, next) => {
    try {
        await Posts.find()
        .then((posts) => res.status(201).json(posts));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const GetOnePost: express.RequestHandler =
async (req, res, next) => {
    try {
        const post: Posts =
        await Posts.findOneOrFail(req.params.id);
        return res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const UpdatePost: express.RequestHandler =
async (req, res, next) => {
    try {
        const post: Posts = 
            await Posts.findOneOrFail(req.params.id);
        post.title = req.body.title;
        post.content = req.body.content;
        post.published = req.body.published;
        post.date = req.body.date;
        await post.save();
        return res.status(201).json("The Post was updated!");
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const DeletePost: express.RequestHandler =
async (req, res, next) => {
    try {
        const post: Posts = 
            await Posts.findOneOrFail(req.params.id);
        await post.remove();
        res.status(201).json("The Post was deleted!");
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};





