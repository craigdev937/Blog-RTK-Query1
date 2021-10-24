import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
    return (
        <article className="post">
            <h2>
                <Link to={`/posts/edit/${item.id}`}>{item.title}</Link>
            </h2>
            <p>{item.content}</p>
            <footer>
                {item.published ?
                    <time>{item.updated}</time>
                    :
                    <span>Draft</span>
                }
                <Link to={`/posts/edit/${item.id}`}>Edit</Link>
            </footer>
        </article>
    );
};





