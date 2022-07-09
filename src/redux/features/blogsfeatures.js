import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const initialState = {
    loading: false,
    blogs:[],
    errorMessage:null
}

export const getBlogs = createAsyncThunk('blogs/getBlogs',async ()=>{
    const postsCollectionRef = collection(db, "posts");
    const data = await getDocs(postsCollectionRef);
    const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    return res;
})
const blogListSlice = createSlice({
    name: 'blogs',
    initialState: initialState,
    extraReducers:(builder)=>{
        builder.addCase(getBlogs.pending, (state,action)=>{
            state.loading = true;
        }).addCase(getBlogs.fulfilled, (state,action)=>{
            state.loading =false;
            state.blogs = action.payload
        }).addCase(getBlogs.rejected, (state,action)=>{
            state.loading = false;
            state.errorMessage = 'oops! Something goes wrong'
        })
    }
})
export default blogListSlice.reducer;