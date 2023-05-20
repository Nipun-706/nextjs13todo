"use client";
import React from 'react'

const addTodoForm = () => {
  return (
    <div>
<form>
<input type="text" placeholder='Enter Title' />
<input type="text" placeholder='Enter Description'/>

<button type="submit">Add Task</button>
</form>


    </div>
  )
}

export default addTodoForm