import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import SingleButton from './SingleButton';
import { useAuth } from '../../context/auth';
import userRoles from '../../constants/roles';

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

function DragDrop({ columns, setColumns, handleHide, handleEdit }) {
  const { user } = useAuth();

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
            style={{ marginBottom: 0 }}
          >
            {columns.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SingleButton
                        title={item.title}
                        iconColor={getColor(index, 0)}
                        showMenuIcon
                        cursor="move"
                        handleEdit={
                          user.role === userRoles.SUPER_ADMIN ||
                          !item.defaultPosition
                            ? () => handleEdit(item)
                            : null
                        }
                        handleHide={
                          item.isCustomSection ? null : () => handleHide(item)
                        }
                        hidden={item.hidden}
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
