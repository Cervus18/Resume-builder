const initialState = {name:"",email:"",phone:"",adress:"",about:""}


const step1Reducer = (state = initialState,action) => {

    const {payload, type} = action
    switch(type) {
        case 'CHANGE_NAME':
            return {...state, name:payload }
        case 'CHANGE_EMAIL':
            return {...state, email:payload}
        case 'CHANGE_ABOUT':
            return {...state, about:payload}
        case 'CHANGE_PHONE':
            return {...state, phone:payload}
         default:
             return state
    }
 }
 
 export default step1Reducer