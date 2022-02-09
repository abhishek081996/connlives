const userReducer =(user="Default",action) => {
    switch(action.type){
    case "user":
        user =action.payload;
        return user;
    default:
        return user;
    }
}
export default userReducer;