import React, { useState } from 'react'

const TaskCardTitle = () => {

  const [isClick, setIsClick] = useState(false);
  const [inputTitle, setInputTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputTitle === "") return;
    setIsClick(false);
  }

  const handleChangeInput = (e) => {
    setInputTitle(e.target.value);
  }

  const handleBlur = () => {
    setIsClick(false);
  }


  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {isClick ? 
      <form action="submit" onSubmit={onSubmitHandler}>
        <input 
          className='taskCardTitleInput'
          value={inputTitle} 
          type="text" 
          onChange={handleChangeInput} 
          onBlur={handleBlur}
          autoFocus
          maxLength="10"
          />
      </form>
      :
      <h3 >{inputTitle}</h3>
      }
    </div>
  )
}

export default TaskCardTitle