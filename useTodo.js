import { useReducer , useEffect} from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodo = () => {
    const initialState= [
    ];

    const init = ()=>{
        return JSON.parse(localStorage.getItem('todos')) || [];
        }

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify( todos ) )
    }, [todos]);

    const handleNewTodo = (todo) =>{
      const action = { 
        type:'[TODO] Add todo',
        payload:todo
      };
      console.log(dispatch(action)); 
    };

    const handleDeleteTodo = ( todoId ) =>{
      const action = {
        type:'[TODO] Remove Todo',
        payload: todoId
      };
    };

    const handleToggleTodo = (todoId) =>{
      const action = {
        type:'[TODO] Check Todo',
        payload: todoId
      }
      dispatch(action)
    }


  return {
    todosCount:todos.length,
    pendingTodosCount:todos.filter( Object => !Object.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todos
  }
}
