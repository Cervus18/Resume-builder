import { combineReducers } from "redux";
import bannerReducer from "./styles/banner";
import step1Reducer from "./data/step1";
import fontReducer from "./styles/font";
import step2Reducer from "./data/step2";
import step3Reducer from "./data/step3";
import step4Reducer from "./data/step4";
import step5Reducer from "./data/step5";
import step6Reducer from "./data/step6";






const allReducers = combineReducers({
    bannerState : bannerReducer,
    step1State: step1Reducer,
    step2State: step2Reducer,
    step3State: step3Reducer,
    step4State: step4Reducer,
    step5State: step5Reducer,
    step6State: step6Reducer,
    fontState: fontReducer
})

export default allReducers