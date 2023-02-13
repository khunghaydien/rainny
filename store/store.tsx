import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterSlide from "../reducer/CounterReducer"
import commentsReducer from "../reducer/CommentsReducer"
import ThemeReducer from "../reducer/ThemeReducer";
export const store = configureStore({
    reducer: {
        counter: counterSlide,
        comments: commentsReducer,
        theme: ThemeReducer
    }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default configureStore