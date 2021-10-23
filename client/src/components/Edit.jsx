import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PostAPI } from "../global/PostAPI";

export const Edit = ({ match }) => {
    const history = useHistory();
    const postId = match.params.id;
    const [post, setPost] = React.useState({
        title: "", content: "", published: true, date: ""
    });

    const { data: postData, isSuccess: postDataReady } = 
    PostAPI.useGetOnePostQuery(postId);

    const [deletePost, { isLoading: isDeleting, isSuccess: isDeleted }] = 
        PostAPI.useDeletePostMutation();
    const [editPost, { isLoading: isUpdating, isSuccess: isSaved }] = 
        PostAPI.useEditPostMutation();
    
    React.useEffect(() => {
        if (postDataReady) {
            setPost(postData);
        }
    }, [postData, postDataReady]);

    return (
        <React.Fragment>
            <h1>Edit</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error vitae optio cum voluptatem repudiandae eligendi tempore expedita alias ratione ducimus atque ipsum quod, magni ea cupiditate provident impedit perspiciatis.</p>
        </React.Fragment>
    );
};





