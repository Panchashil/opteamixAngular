import { createSelector } from "@ngrx/store";
import { AppState } from "../app.store";

export const selectorCounterState = (state:AppState)=>state.counter;

export const selectCount = createSelector(
    selectorCounterState,
    (state)=>state.count
)



