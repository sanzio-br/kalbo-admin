import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import { getDocs, collection ,deleteDoc, doc} from "firebase/firestore";
import { db } from "../../firebase-config";
const initialState = {
    loading: false,
    blogs:[],
    errorMessage:null,
    modalShow:false
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
    reducers:{
        Close: (state , action)=>{
            state.modalShow = false;
        },
        Open: (state , action)=>{
            state.modalShow = true;
        },
    },
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
export const {Open, Close} = blogListSlice.actions;
export const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    Close();
  };
export default blogListSlice.reducer;