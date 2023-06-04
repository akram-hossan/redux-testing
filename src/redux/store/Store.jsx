import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../state/counter/CounterReducer";

export default configureStore({
    reducer:{
        counter:CounterReducer
    }
})