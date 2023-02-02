// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ApiConstants from './index'

// Define a service using a base URL and expected endpoints

export const PostsApi = createApi({
    //defince which reducer to use
    reducerPath: 'postsApiReducer',
    //defince base url of your server
    baseQuery: fetchBaseQuery({ baseUrl: ApiConstants.BASE_URL }),
    //define add params and data to your server call
    endpoints: (builder) => ({

        //get all posts
        getPostsAPI: builder.query({
            query: data => ({
                url: ApiConstants.POSTS,
                method: 'GET',
            }),
        }),

        //get single post
        getSinglsPostAPI: builder.query({
            query: data => ({
                url: ApiConstants.POSTS + `/${data.id}`,
                method: 'GET',
            }),
        }),

        //add a new post
        addSinglePost: builder.mutation({
            query: data => ({
                url: ApiConstants.POSTS,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: data.body
            })
        }),

        //edit an existing post
        editSinglePost: builder.mutation({
            query: data => ({
                url: ApiConstants.POSTS + `/${data.id}`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: data
            })
        }),

        //delete an existing post
        deleteSinglePost: builder.mutation({
            query: data => ({
                url: ApiConstants.POSTS + `/${data.id}`,
                method: 'DELETE',
            })
        })
    }),
})


export const {
    useGetPostsAPIQuery,
    useGetSinglsPostAPIQuery,
    useAddSinglePostMutation,
    useEditSinglePostMutation,
    useDeleteSinglePostMutation
} = PostsApi

