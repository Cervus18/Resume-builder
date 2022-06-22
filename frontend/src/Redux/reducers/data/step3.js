const initialState = []


const step3Reducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case 'ADD_LANGUAGE':
            return [...state,payload]
        case 'DELETE_LANGUAGE':
            return state.filter(item => item.id !== payload)
        
         default:
             return state
    }
 }
 
 export default step3Reducer