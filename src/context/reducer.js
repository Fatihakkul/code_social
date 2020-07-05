export function reducer (state , action){
    switch (action.type) {
        case "SET_ITEM":
                let newlist = [...state.posts]
                const value = action.post
                newlist.push(value)
                state.posts=newlist
             return {...state}
        case "DELETE_ITEM":
            let newList = [...state.posts]
            const i = action.index
            if(i> -1)newList.splice(i,1)
            
            state.posts=newList
            return {...state}
       
        default:
            return state
    }
}