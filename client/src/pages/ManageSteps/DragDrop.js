import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';
import { Grid as G, Typography as T, Icon } from '../../components';
import { buttonStyle } from './style';
import { navRoutes } from '../../constants';

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function DragDrop({
  beforeClaiming,
  claiming,
  afterClaiming,
  columns,
  setColumns,
}) {
  const history = useHistory();

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div key={columnId}>
              <G.Row mt="7">
                <G.Col w={[4, 6, 4]}>
                  <T.H2>{column.name}</T.H2>
                </G.Col>
              </G.Row>
              <G.Row mt="4">
                <G.Col w={[4, 6, 4]}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? 'lightblue'
                              : 'transparent',
                            padding: 4,
                            width: '100%',
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.title + item.id}
                                draggableId={item.title + item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      onClick={() =>
                                        history.push(
                                          navRoutes.ADMIN.EDIT_STEP.replace(
                                            ':id',
                                            item.id
                                          )
                                        )
                                      }
                                      style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging
                                          ? '#263B4A'
                                          : '#456C86',
                                        color: 'white',
                                        ...buttonStyle,
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <T.P weight="bold">{item.title}</T.P>
                                      <Icon
                                        color="borderPrimary"
                                        icon="forwardArrow"
                                      />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </G.Col>
              </G.Row>
            </div>
          );
        })}
      </DragDropContext>
    </>
  );
}

export default DragDrop;
