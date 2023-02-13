import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCount } from '../component/home/CounterApi'
export interface CounterState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}
export const CounterReducer = createSlice({
    name: 'counter',

    initialState: {
        value: 0,
        status: 'idle'
    },

    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        },
        incrementIfOdd: (state, action) => {
            if (action.payload % 2 === 1) {
                state.value += action.payload
            }
        },
        decrementIfEven: (state, action) => {
            if (action.payload % 2 === 0) {
                state.value -= action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
})
export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount);
        return response.data;
    }
);
export const { increment, decrement, incrementByAmount, decrementByAmount, incrementIfOdd, decrementIfEven } = CounterReducer.actions
export default CounterReducer.reducer