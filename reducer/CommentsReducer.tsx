import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type commentType = {
    id: string,
    comment: string
}
export const commentsReducer = createSlice({
    name: 'comments',
    initialState: [
        {
            id: "1",
            comment: "default comment"
        }],
    reducers: {
        createComment: (state, action: PayloadAction<{
            id: string,
            comment: string
        }>) => {
            let hasComment: boolean = false
            state.forEach((item) => {
                if (item.id === action.payload.id) {
                    hasComment = true
                    return
                }
            })
            if (!hasComment) {
                state.push({
                    id: action.payload.id,
                    comment: action.payload.comment
                })
            }
            else {
                alert("duplicate id");
            }
        },
        deleteComment: (state, action: PayloadAction<string>) => {
            state.forEach((item, index) => {
                if (item.id === action.payload) {
                    state.splice(index, 1)
                }
            })

        },
        updateComment: (state, action: PayloadAction<{
            id: string,
            comment: string
        }>) => {
            state.forEach(item => {
                if (item.id === action.payload.id) {
                    item.comment = action.payload.comment
                }
            })
        }
    }
})
export const { createComment, deleteComment, updateComment } = commentsReducer.actions
export default commentsReducer.reducer
