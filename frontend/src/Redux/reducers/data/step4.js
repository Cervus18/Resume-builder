const initialState = []


const step4Reducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case 'ADD_HOBBY':
            return [...state,payload]
        case 'DELETE_HOBBY':
            return state.filter(item => item.id !== payload)
        
         default:
             return state
    }
 }
 
 export default step4Reducer