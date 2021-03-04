
let nextId = 0;

const todos = (state = [], action) =>{
    switch(action.type){
        case "CREATE_TODO":
            return[
                ...state, {
                    id: nextId++,
                    title: action.title,
                    description: action.description,
                    deadline: action.deadline,
                    completed: false
                }
            ]

        // case "TOGGLE_TODO":
        //     return(
        //         state.map((todo) => (todo.id === action.id) ? { ...todo, comlleated: !todo.comlleated}: todo)
        //     )

        // case "UPDATE_TODO":
        // case "DELETE_TODO":

        default:
            return state
    }

}

export default todos;