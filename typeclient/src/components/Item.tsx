import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../models/IPost";

export const Item = ({ post }: IPost): JSX.Element => {
    return (
        <article className="post">
            <h2>
                <Link to={`/posts/edit/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.content}</p>
            <footer>
                {post.published ?
                <time>{post.updated}</time>
                :
                <span>Draft</span>
            }
            <Link to={`/posts/edit/${post.id}`}>Edit</Link>
            </footer>
        </article>
    );
};




