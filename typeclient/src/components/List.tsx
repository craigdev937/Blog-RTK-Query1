import React from "react";
import { Item } from "./Item";
import { Link } from "react-router-dom";
import { PostAPI } from "../global/PostAPI";

export const List = (): JSX.Element => {
    const { data: posts } = 
        PostAPI.useFetchAllPostsQuery();

    return (
        <React.Fragment>
            <header className="post-header">
                <Link to="/posts/add/">Add Post</Link>
            </header>
            {posts?.map((post) => (
                <Item 
                    key={post.id} 
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                    published={post.published}
                    created={post.created}
                    updated={post.updated}
                    post={post} 
                />
            ))}
            {posts?.length === 0 && <aside>Write Something</aside>}
        </React.Fragment>
    );
};




