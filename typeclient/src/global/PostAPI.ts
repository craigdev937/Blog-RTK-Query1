import { IPost } from "../models/IPost";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "http://localhost:9000/api/posts";
export const PostAPI = createApi({
    reducerPath: "PostAPI",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[], void>({
            query: () => "/",
            providesTags: (result) => result ?
                [...result.map(({ id }) =>
                    ({ type: "Posts" as const, id })),
                    { type: "Posts", id: "LIST" },
                ] : [{ type: "Posts", id: "LIST" }],
        }),
        getOnePost: builder.query<IPost, number>({
            query: (id) => `posts/${id}/`,
            providesTags: (result, error, id) => 
                [{ type: "Posts", id }],
        }),
        addPost: builder.mutation<IPost, IPost>({
            query: (post) => {
                return {
                    url: `posts/`,
                    method: "POST",
                    body: post
                }
            },
            invalidatesTags: [{ type: "Posts", id: "LIST" }],
        }),
        editPost: builder.mutation<IPost, IPost>({
            query: ({id, ...post}) => {
                return {
                    url: `post/${id}`,
                    method: "PUT",
                    body: post
                };
            },
            invalidatesTags: (result, error, {id}) => 
                [{ type: "Posts", id }],
        }),
        deletePost: builder.mutation<IPost, number>({
            query: (id) => {
                return {
                    url: `posts/${id}/`,
                    method: "DELETE",
                };
            },
            invalidatesTags: (result, error, id) => 
                [{ type: "Posts", id }],
        }),
    }),
});



