import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/features/TaskSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskAddInput = () => {

    const dispatch = useDispatch();

    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            content: newTask
        }
        dispatch(addTask(newItem));
        setNewTask("");
    }

    const handleChangeInput = (e) => {
        setNewTask(e.target.value);
        // console.log(newTask);
    }

  return (
    <div>
        <form action="submit" onSubmit={handleSubmit}>
            <input 
                value={newTask}
                type="text" 
                placeholder='Add a task' 
                className='taskAddInput'
                onChange={handleChangeInput}
            />
        </form>
    </div>
  )
}

export default TaskAddInput