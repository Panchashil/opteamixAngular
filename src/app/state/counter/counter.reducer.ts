import { createReducer,on} from "@ngrx/store";
import { increment,decremnt,reset } from "./counter.action";


export  interface CounterState{
    count:number
   }

export const intialCounterState:CounterState ={
    count:100
}   

export const counterReducer = createReducer(
    intialCounterState,
  on(increment,(state)=>({...state,count:state.count+1})),
  on(decremnt,(state)=>({...state,count:state.count-1})),
  on(reset,(state)=>({...state,count:0}))
)







