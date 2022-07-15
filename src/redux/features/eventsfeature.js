import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import { getDocs, collection ,deleteDoc, doc} from "firebase/firestore";
import { db } from "../../firebase-config";
const initialState = {
    loading: false,
    events:[],
    errorMessage:null,
    modalShow:false
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
    reducers:{
        Close: (state , action)=>{
            state.modalShow = false;
        },
        Open: (state , action)=>{
            state.modalShow = true;
        },
    },
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
export const {Open, Close} = eventListSlice.actions;
export const deletePackage = async (id) => {
    Close();
    const postDoc = doc(db, "events", id);
    await deleteDoc(postDoc);
  };
export default eventListSlice.reducer;