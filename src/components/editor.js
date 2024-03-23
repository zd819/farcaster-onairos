import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// A utility function to help reorder the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// The editor component
function Editor() {
  const [items, setItems] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newItems);
  };

  const handleAddButton = () => {
    setItems([...items, { id: `button-${items.length}`, type: 'button', text: 'New Button' }]);
  };

  const handleAddImage = () => {
    // Placeholder for adding an image
  };
 const serializeState = () => {
    // Simple serialization of the editor state
    return JSON.stringify(items);
  };

  const handleSaveLayout = async () => {
    const serializedData = serializeState();
    try {
      const response = await fetch('/api/frame/create-frame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: serializedData,
      });
      const result = await response.json();
      console.log(result);
      alert(`Frame created! Access it here: ${result.frameUrl}`);
    } catch (error) {
      console.error('Error saving layout:', error);
      alert("Failed to save layout.");
    }
  };

  // Rendering the editor
  return (
    <>
      <button onClick={handleAddButton}>Add Button</button>
      <button onClick={handleAddImage}>Add Image</button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.type === 'button' ? item.text : 'Image Here'}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={handleSaveLayout}>Save Frame Layout</button>

    </>
  );
}

export default Editor;
