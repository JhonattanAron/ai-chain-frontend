import { combineReducers } from "@reduxjs/toolkit"
import Session from "./reducers/Session"
import SkinGet from "./reducers/SkinGet"


const RootReducer = combineReducers({
    session: Session,
    get_skin: SkinGet
})

export default RootReducer