const initialState = {fontFamily: "sans-serif", fontStyle: ""}


const fontReducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case "CHANGE_FONT_FAMILY":
            return {...state, fontFamily: payload}
            case "CHANGE_FONT_STYLE":
                return {...state, fontStyle: payload}

         default:
             return state
    }
 }
 
 export default fontReducer