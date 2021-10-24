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

    const [deletePost, { 
            isLoading: isDeleting, isSuccess: isDeleted 
        }] = PostAPI.useDeletePostMutation();

    const [editPost, {
        isLoading: isUpdating, isSuccess: isSaved 
    }] = PostAPI.useEditPostMutation();
    
    React.useEffect(() => {
        if (postDataReady) {
            setPost(postData);
        }
    }, [postData, postDataReady]);

    const updatePost = (event) => {
        event.preventDefault();
        editPost(post);
        goBack(700);
    };

    const removePost = () => {
        deletePost(postId);
        goBack(700);
    };

    const inputHandler = (event) => {
        const { name, value, checked } = event.target;
        let theValue = name === "published" ? checked : value;
        setPost({...post, [name]: theValue});
    };

    const goBack = (time) => {
        setTimeout(() => {
            history.push("/posts");
        }, time);
    };

    return (
        <React.Fragment>
            <form className="form" onSubmit={updatePost}>
                <h2>Edit Post</h2>

                <aside>
                    <label htmlFor="title">Title</label>
                    <input 
                        required
                        className="form-control" 
                        type="text"
                        name="title"
                        id="title"
                        value={post.title}
                        onChange={inputHandler}
                    />
                </aside>

                <aside>
                    <label htmlFor="content">Content</label>
                    <textarea 
                        className="form-control"
                        rows="10"
                        name="content"
                        id="content"
                        value={post.content}
                        onChange={inputHandler}>
                    </textarea>
                </aside>

                <aside>
                    <label htmlFor="published">Published</label>
                    <input 
                        className="form-checkbox"
                        type="checkbox" 
                        name="published" 
                        id="published" 
                        checked={post.published}
                        onChange={inputHandler}
                    />
                </aside>

                <footer className="form-footer">
                    <Link to="/" className="btn btn-default">Cancel</Link>
                    <button 
                        className="btn btn-danger" 
                        type="button"
                        onClick={removePost}
                        >{isDeleting ? "Deleting..." : "Delete"}
                    </button>
                    <button 
                        className="btn btn-primary"
                        type="submit"
                        >{isUpdating ? "Saving..." : "Save"}
                    </button>
                </footer>
                {isSaved && (
                    <aside 
                        className="alert alert-primary"
                        >Post Saved. redirecting...
                    </aside>
                )}
                {isDeleted && (
                    <aside 
                        className="alert alert-danger"
                        >Post Deleted. redirecting...
                    </aside>
                )}
            </form>
        </React.Fragment>
    );
};





