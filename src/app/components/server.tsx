import { title } from 'process'
import React from 'react'
import { TodoButton } from './client'

export const TodoItem = ({title, description,id,completed}) => {
  return (
    <div>
<div><h4>{title}</h4>
        <p>{description}</p></div>
        <div>
            <TodoButton id={id} completed={completed}/>
        </div>
    </div> 

  )
}

