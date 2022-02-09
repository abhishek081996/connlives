const navReducer =(nav="home",action) => {
    switch(action.type){
    case "nav":
        nav =action.payload;
        return nav;
    default:
        return nav;
    }
}
export default navReducer;