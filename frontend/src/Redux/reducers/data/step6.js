const initialState =[]


const step6Reducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case 'ADD_EXPERIENCE':
            return [...state, payload]
        case 'DELETE_EXPERIENCE':
            return state.filter((item)=> item.id!== payload)
        
         default:
             return state
    }
 }
 
 export default step6Reducer