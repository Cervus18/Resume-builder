export const addHobby = (payload) => {
    
    return {
        type: "ADD_HOBBY",
        payload: payload
    }
}

export const deleteHobby = (payload) => {
    
    return {
        type: "DELETE_HOBBY",
        payload: payload
    }
}