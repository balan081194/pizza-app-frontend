import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'



export const getAllPizzasReducer = createAsyncThunk('get/getpizzas',async ()=>{
            
    return axios.get('https://pizza-app-backend-d1tt.onrender.com/api/pizzas/getallpizzas ').then(res=>{
        return res.data
    })
})

const pizzaSlice = createSlice({
    name:'pizzas',
    initialState:{
        pizzas:[],
        loading:false
    },
    extraReducers:{
        [getAllPizzasReducer.pending]: (state,action)=>{
            state.loading = true
        },
        [getAllPizzasReducer.fulfilled]: (state,action)=>{
            state.loading = false;
            state.pizzas = action.payload;
        },
        [getAllPizzasReducer.rejected]: (state,action)=>{
            state.loading = false;
           
        }
    }

})

export default pizzaSlice.reducer;
