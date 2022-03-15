import React,{useState} from 'react'
import { getPosts } from '../../../../services/todo.services'
import Button from '../../../atoms/Button/Button'
import "./TaskTextfield.css"

export default function TaskTextField() {
    const [tasksArray, setTasksArray]=useState([])

    const handleGetTasks = (e)=> {
        e.preventDefault()
        getPosts().then((res)=> {
            console.log(res)
            setTasksArray(res.data)
        })
    }
  return (
    <form>
        <label className="task-wrapper"> 
           Enter Your Task 
        </label>
        <input type="text" />
        <Button
        onClick={handleGetTasks}
        />
    </form>
  )
}
