/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
    },
    reducers: {
        // add post
        addPost: (state, action) => {
            state.items.push(action.payload)
        },
        // delete post
        deletePost: (state, action)=>{
            state.items = state.items.filter((item)=> item.id != action.payload.id)
        },
        // update post
        updatePost: (state,action)=>{
             state.items.map((item)=>{
                if(item.id == action.payload.id){
                    item.title =  action.payload.title;
                    item.description =  action.payload.description;
                }
            });
        },
    },
})

// Action creators are generated for each case reducer function
export const {addPost, deletePost, updatePost} = postSlice.actions

export default postSlice.reducer