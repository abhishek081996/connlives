export const setState = (variable,value) => {
    return (dispatch) =>{
        dispatch({
            type:variable,
            payload:value
        })
    }
}