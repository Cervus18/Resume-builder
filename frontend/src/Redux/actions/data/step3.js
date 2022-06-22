export const addLanguage = (payload) => {
    
    return {
        type: "ADD_LANGUAGE",
        payload: payload
    }
}

export const deleteLanguage = (payload) => {
    
    return {
        type: "DELETE_LANGUAGE",
        payload: payload
    }
}