import React from "react";
import { Link, useHistory } from "react-router-dom";
import { PostAPI } from "../global/PostAPI";

export const Add = () => {
    const history = useHistory();
    const today = new Date().toLocaleDateString("en-US");
    const [post, setPost] = React.useState({
        title: "", content: "", published: true, date: today
    });

    const [
        addPost, 
        { isLoading: updating, isSuccess: saved }
    ] = PostAPI.useAddPostMutation();

    const savePost = (event) => {
        event.preventDefault();
        addPost(post);
        goBack(700);
    };

    const inputHandler = (event) => {
        const { name, value, checked } = event.target;
        let theValue = name === "published" ? checked : value;
        setPost({...post, [name]: theValue});
    };

    const goBack = (time) => {
        setTimeout(() => {
            history.push("/posts/");
        }, time);
    };

    return (
        <React.Fragment>
            <form className="form" onSubmit={savePost}>
                <h2>Add Post</h2>
                <aside>
                    <label>Title</label>
                    <input 
                        required
                        type="text" 
                        id="title"
                        name="title"
                        className="form-control"
                        onChange={inputHandler}
                    />
                </aside>
                <aside>
                    <label>Content</label>
                    <textarea 
                        name="content" 
                        id="content" 
                        className="form-control" 
                        rows="10"
                        onChange={inputHandler}>
                    </textarea>
                </aside>
                <aside>
                    <label htmlFor="published">Published</label>
                    <input 
                        className="form-checkbox"
                        name="published"
                        id="published"
                        type="checkbox" 
                        checked={post.published}
                        onChange={inputHandler}
                    />
                </aside>
                <footer className="form-footer">
                    <Link to="/" className="btn btn-default">Cancel</Link>
                    <button 
                        className="btn btn-primary" 
                        type="submit"
                        >{updating ? "Adding..." : "Add"}
                    </button>
                </footer>
                {saved && (
                    <aside 
                        className="alert alert-primary"
                        >Post added. redirecting...
                    </aside>
                )}
            </form>
        </React.Fragment>
    );
};





