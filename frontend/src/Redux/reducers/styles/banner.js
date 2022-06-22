const initialState = {color: "#A7A7A7", theme: null}


const bannerReducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case 'CHANGE_BANNER_THEME':
            return {color: "", theme: payload }
        case 'CHANGE_BANNER_COLOR':
            return {color: payload, theme: null}
         default:
             return state
    }
 }
 
 export default bannerReducer