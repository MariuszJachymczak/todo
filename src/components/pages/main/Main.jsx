import React,{useState,useEffect} from 'react'
import { getTodos, addTodo } from '../../../services/todo.services'
import "./Main.css"
import Button from '../../atoms/Button/Button'

export default function Main() {

  const [tasksArray, setTasksArray]=useState([])
  const [newTask, setNewTask]= useState('test')

  useEffect(()=>{},[])

  
  const handleAddTask = ()=> {
    const newTasks  = {
      title:newTask,
      status:"completed"
      }
        addTodo(newTasks).then(()=>{
        getTodos().then((res)=>{
          setTasksArray(res.data)
          
        })
      })
    }


  return (
    <div className="main-wrapper">
      <h2 className="todo-list-main"> Tasks List </h2>

      <div>
      <form className='todo-task'
        onSubmit={(e) => {
          e.preventDefault()
          handleAddTask()
          // getTodos().then((res)=>{
          //   setTasksArray(res.data)
          //   console.log(res)
          // })
          
        }}
      >
        <label className="todo-task-label"> 
           Enter Your Task 
        </label>
        <input type="text" 
        value={newTask}
        onChange={(e)=> {
          setNewTask(e.target.value)
        }}
        />
        <Button
        label={"Submit"}
        type={"submit"}
        onClick={handleAddTask}
        >SUBMIT </Button>
    </form>
          {/* {tasksArray.length === 0  ? (<h3>There are no tasks in the list.</h3>):null} */}
      </div>
      {tasksArray.map(task=>{
       return <h1>{task.title}</h1>
      })}
    </div>
  )
}
