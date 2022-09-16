import React from 'react'

const TodoList = ({todo}) => {
  return (
    <div>
      { todo.length > 0 &&  todo?.map((item)=>{
           return <div key={item.id}>
          
            <div> {item.title}-{item.status ? "true": "false"}</div>
          
            </div>
        
        })}
    </div>
  )
}

export default TodoList
