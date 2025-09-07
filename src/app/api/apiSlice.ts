import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api', // Namespace for the reducer
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Post'], // For cache invalidation
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts',
            providesTags: (result = []) => [
                ...result.map(({ id }) => ({ type: 'Post' as const, id })),
                { type: 'Post', id: 'LIST' },
            ],
        }),
        getPost: builder.query<Post, number>({
            query: (id) => `/posts/${id}`,
            providesTags: (result, error, id) => [{ type: 'Post', id }],
        }),
        addPost: builder.mutation<Post, Partial<Post>>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
            invalidatesTags: [{ type: 'Post', id: 'LIST' }],
        }),
    }),
});

// Export hooks for usage in components
export const { useGetPostsQuery, useGetPostQuery } = apiSlice;

// Define types (from API response)
interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}