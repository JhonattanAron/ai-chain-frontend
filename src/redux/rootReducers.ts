import { combineReducers } from "@reduxjs/toolkit"
import Session from "./reducers/Session"


const RootReducer = combineReducers({
    session: Session,
})

export default RootReducer