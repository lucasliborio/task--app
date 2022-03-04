import "./style.css"
import { Todo } from "../model"
import CardTodo from "./CardTodo"
import { Droppable } from "react-beautiful-dnd"
interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    completed:Todo[]
    setCompleted:React.Dispatch<React.SetStateAction<Todo[]>>

}

const TodoList = (props:Props) => {
    return(

        <div className="container">
            <Droppable droppableId="TodosList">
            {
                (provided, snapshot) =>(
                    <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`} ref={provided.innerRef} {...provided.droppableProps}>
                    <span className="todos__heading">Active Tasks</span>
                    {props.todos.map( (todo, index) => (
                        <CardTodo index={index}todo={todo} key={todo.id} todos={props.todos} setTodos={props.setTodos}/>
                    ))}
                {provided.placeholder}
                </div>
                )
            }
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {
                    (provided, snapshot) => (
                        <div className={`todos  ${
                            snapshot.isDraggingOver ? "dragcomplete" : "remove"
                          }`}ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__heading">CompleteD Tasks</span>
                        {props.completed.map( (todo, index) => (
                        <CardTodo index={index} todo={todo} key={todo.id} todos={props.completed} setTodos={props.setCompleted}/>
                        ))}
                        {provided.placeholder}
                        </div>  
                    )  
                }
            </Droppable>
            
        </div>
    )
}

export default TodoList