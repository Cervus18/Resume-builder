export const addSkill = (payload) => {
    
    return {
        type: "ADD_SKILL",
        payload: payload
    }
}

export const deleteSkill = (payload) => {
    
    return {
        type: "DELETE_SKILL",
        payload: payload
    }
}