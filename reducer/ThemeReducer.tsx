import { createSlice } from "@reduxjs/toolkit";

export const ThemeReducer = createSlice({
    name: 'theme',
    initialState: { theme: false },
    reducers: {
        changeTheme: state => {
            state.theme = !state.theme
        }
    }
})
export const { changeTheme } = ThemeReducer.actions
export default ThemeReducer.reducer