
export const todoReducer = (initialState,action) =>{

    switch (action.type) {

        case '[TODO] Add todo':
        
        return [...initialState, action.payload];

        case '[TODO] Remove Todo':
        
        return initialState.filter(element => element.id !== action.payload);

        case '[TODO] Check Todo':
        
        return initialState.map(
            todo=>{

                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

            return todo
        });
    
        default: 

        return initialState;
        
    } 

}