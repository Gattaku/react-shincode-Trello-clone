import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux';

const Task = (props) => {
    const {task, index} = props;
    // const tasks = useSelector((state)=> state.task.items);


  return (
    <div>
        <Draggable 
            draggableId={task.id}
            index={index}
            key={task.id}  
        >
            {(provided)=>(
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className='taskBox'
            >
                <p className='taskText'>{task.content}</p>
                <button className='taskTrashButton'>
                 <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
            )}
        </Draggable>
    </div>
  )
}

export default Task