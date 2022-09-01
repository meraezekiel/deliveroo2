import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCounter: (state,action) => {
        state.items = [...state.items,action.payload];
      
    },
    removeFromCounter: (state,action) => {
       const index = state.items.findIndex((item) => item.id === action.payload.id);

       let newCounter = [...state.items];

       if (index >= 0){
          newCounter.splice(index,1);
       }else{
          console.warn(`Cannot remove product (id: ${action.payload.id}) as its not in basket`);
       }
       state.items=newCounter;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addToCounter, removeFromCounter } = counterSlice.actions;

export const selectCounterItems = (state) => state.counter.items;

export const selectCounterItemsWithId = (state,id) => state.counter.items.filter((item) => item.id == id);

export const selectCounterTotal  = (state) => state.counter.items.reduce((total, item)=>
total += item.price, 0) 

export default counterSlice.reducer;