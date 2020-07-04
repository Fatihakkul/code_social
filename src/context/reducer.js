export function reducer (state , action){
    switch (action.type) {
        case "SET_ITEM":
                let newlist = [...state.posts]
                const value = action.post
                newlist.push(value)
                state.posts=newlist
             return {...state}
          
    
        default:
            return state
    }
}