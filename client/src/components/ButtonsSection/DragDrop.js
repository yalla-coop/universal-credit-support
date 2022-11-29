import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import SingleButton from './SingleButton';

const colorArray = [
  'primaryDark',
  'secondaryMain',
  'primaryMain',
  'neutralMain',
];
const getColor = (index, startingColor) => {
  const _index = (index + startingColor) % colorArray.length;
  return colorArray[_index];
};

function DragDrop({ columns, setColumns }) {
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(columns);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setColumns(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="buttons">
        {(provided) => (
          <ul
            className="buttons"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {columns.map(({ id, name, hidden }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SingleButton
                        name={name}
                        iconColor={getColor(index, 0)}
                        showMenuIcon
                        handleEdit={() => {}}
                        handleHide={() => {}}
                        hidden={hidden}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragDrop;
