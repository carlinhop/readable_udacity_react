function reducer(state = {post: {title: "A Federal Ban on Making Lethal Viruses Is Lifted"}}, action) {
    switch(action.type){
        case "HELLO":
            return (
        		Object.assign({}, state, {
                  post: {title : "A Federal Ban on Making Lethal Viruses Is Changed"
      			}})
            )
        
        default:
            return state;
    }
}

export default reducer;