const initialState = []


const step2Reducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case 'ADD_SKILL':
            return [...state,payload]
        case 'DELETE_SKILL':
            return state.filter(item => item.id !== payload)
        
         default:
             return state
    }
 }
 
 export default step2Reducer