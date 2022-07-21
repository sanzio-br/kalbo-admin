import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import { getDocs, collection ,deleteDoc, doc} from "firebase/firestore";
import { db } from "../../firebase-config";
const initialState = {
    loading: false,
    gallery:[],
    errorMessage:null,
}

export const getEvents = createAsyncThunk('gallery/getGallery',async ()=>{
    const postsCollectionRef = collection(db, "gallery");
    const data = await getDocs(postsCollectionRef);
    const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    return res;
})
const galleryListSlice = createSlice({
    name: 'gallery',
    initialState: initialState,
    extraReducers:(builder)=>{
        builder.addCase(getEvents.pending, (state,action)=>{
            state.loading = true;
        }).addCase(getEvents.fulfilled, (state,action)=>{
            state.loading =false;
            state.events = action.payload
        }).addCase(getEvents.rejected, (state,action)=>{
            state.loading = false;
            state.errorMessage = 'oops! Something goes wrong'
        })
    }
})
export const {Open, Close} = galleryListSlice.actions;
export const deletePackage = async (id) => {
    Close();
    const postDoc = doc(db, "gallery", id);
    await deleteDoc(postDoc);
  };
export default galleryListSlice.reducer;