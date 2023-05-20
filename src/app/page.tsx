import React from 'react'
import Form from "../app/addTodoForm"
import { TodoItem } from './components/server'

const page = () => {
  return (
    <div className="container">
 
<Form/>
<TodoItem title={"Sample Task"} description={"asdasda"} id={"sampleid"} completed={false}/>
    </div>
  )
}

export default page