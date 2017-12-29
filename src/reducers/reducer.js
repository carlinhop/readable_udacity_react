function reducer(state = {hello: "nada"}, action) {
    switch(action.type){
        case "HELLO":
            return state.hello = "hola mundo";
        default:
            return state;
    }
}

export default reducer;