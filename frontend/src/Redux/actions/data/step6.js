export const addExperience = (payload) => {
    
    
    return {
        type: "ADD_EXPERIENCE",
        payload: payload
    }
}

export const deleteExperience = (payload) => {
    
    return {
        type: "DELETE_EXPERIENCE",
        payload
    }
}