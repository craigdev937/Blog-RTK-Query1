import React from "react";
import { Link } from "react-router-dom";
import { PostAPI } from "../global/PostAPI";
import { Item } from "./Item";

export const List = () => {
    const { data: posts } = PostAPI.useFetchAllPostsQuery();

    return (
        <React.Fragment>
            <header>
                <Link to="/posts/add/">Add Post</Link>
            </header>
            {posts?.map((item) => <Item item={item} key={item.id} />)}
            {posts?.length === 0 &&
                <aside>Write Something</aside>}
        </React.Fragment>
    );
};





