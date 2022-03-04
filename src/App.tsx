import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'


const App :React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTask, setCompletedTask] = useState<Todo[]>([])

  const onModify = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setTodo(e.target.value)
  }

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}])
      setTodo('')
    }
  }
  const onDragEnd = (result:DropResult) => {
    const {source, destination} = result

    if(!destination) return
    if(destination.droppableId === source.droppableId && destination.index === source.index) return
    
    let add, 
    active = todos,
    complete = completedTask

    if(source.droppableId === "TodosList"){
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }
    if(destination.droppableId === "TodosList"){
      
      active.splice(destination.index, 1, add)
    } else {
      
      complete.splice(source.index, 0, add)
    }

    setCompletedTask(complete)
    setTodos(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'>Taskify</span>
        < InputField todo={todo} setTodo={setTodo} onModify={onModify} handleAdd={handleAdd}/>
        < TodoList completed={completedTask} setCompleted={setCompletedTask}todos={todos} setTodos={setTodos}/>
        </div>
    </DragDropContext>
  );
}

export default App;
