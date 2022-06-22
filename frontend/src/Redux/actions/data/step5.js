export const addImage = (payload) => {
    
    return {
        type: "ADD_IMAGE",
        payload: payload
    }
}

export const deleteImage = () => {
    
    return {
        type: "DELETE_IMAGE",
        payload:  ""
    }
}