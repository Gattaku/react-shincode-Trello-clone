import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeTask } from '../../redux/features/TaskSlice';
import Task from './Task';

const Tasks = () => {

    const tasks = useSelector((state)=> state.task.items);
    const dispatch=useDispatch();

    const onDragEnd = (result)=> {
      // console.log(result);
      const tempTasks = [...tasks];
      const start = result.source.index;
      const end = result.destination.index;
      const remove = tempTasks.splice(start,1);
      tempTasks.splice(end,0,remove[0]);
      dispatch(changeTask(tempTasks));
    }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided)=>(
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index)=> {
                  return (
                    <Task task={task} index={index} key={task.id}/>
                  )
              })
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks