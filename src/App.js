import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    { id: 0, item: "item0" },
    { id: 1, item: "item1" },
    { id: 2, item: "item2" },
    // "item0", "item1", "item2",
  ])

  const onDragEnd = (result) => {
    // console.log(result);
    const start = result.source.index;
    const end = result.destination.index;
    const tempItem = [...items];
    const remove = tempItem.splice(start, 1);
    tempItem.splice(end, 0, remove[0]);
    console.log(tempItem);
    setItems(tempItem);
  }

  return (
    <div className='drag-drop-area'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps}
              ref={provided.innerRef}>
              {items.map((item, index) => {
                return (
                  <Draggable draggableId={item.item} index={index} key={item.id}>
                    {(provided) => (
                      <div
                        className='item'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.item}
                      </div>
                    )}
                  </Draggable>
                )
              })
              }

              {provided.placeholder}
            </div>
          )}

        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
