import React from 'react';
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';

const TaskList = () => {

  const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL );

  const changeState = (id) => {
    console.log("TODO: cambiar estado de una tarea")
  }

  return (
    <div>
      <div>
        Your Task:
      </div>
      {/* TODO: aplicar un map para renderizar una lista de tareas*/}
      <TaskComponent task={defaultTask}/>
    </div>
  );
};

export default TaskList;
