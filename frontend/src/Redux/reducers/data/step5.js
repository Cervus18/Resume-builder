const initialState = ""


const step5Reducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case 'ADD_IMAGE':
            return payload
        case 'DELETE_IMAGE':
            return ""
        
         default:
             return state
    }
 }
 
 export default step5Reducer