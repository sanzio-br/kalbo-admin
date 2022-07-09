import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const initialState = {
    loading: false,
    events:[],
    errorMessage:null
}

export const getEvents = createAsyncThunk('events/getEvents',async ()=>{
    const postsCollectionRef = collection(db, "events");
    const data = await getDocs(postsCollectionRef);
    const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    return res;
})
const eventListSlice = createSlice({
    name: 'events',
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
export default eventListSlice.reducer;