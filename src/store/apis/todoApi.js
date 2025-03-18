
/**
 * Working with RTK Query (Redux Tool Kit)
 */

import {createApi, fakeBaseQuery, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todosApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),
    })
})

export const {useGetTodosQuery, useGetTodoQuery} = todosApi;