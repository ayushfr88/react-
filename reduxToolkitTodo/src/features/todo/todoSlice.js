import { createSlice ,nanoid} from "@reduxjs/toolkit";
// nanoid is used to generate unique ids for each todo item
const initialState = {
    todos: [{id:1,text:"Hello World"}]
};
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
        // filter returns the array with for true contdition only
    }
});
//to use removeTodo we will need a id and that id will comoe from action  

export const {addTodo,removeTodo} =todoSlice.actions;
export default todoSlice.reducer;