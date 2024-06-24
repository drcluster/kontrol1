import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    if(tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setSelectedTask(null);
  };

  const toggleTaskStatus = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === 'ready' ? 'not ready' : 'ready' }
          : task
      )
    );
  };

  return (
    <div>
      <TaskList
        tasks={tasks}
        onEditTask={setSelectedTask}
        onDeleteTask={deleteTask}
        onToggleTaskStatus={toggleTaskStatus}
      />
      <TaskForm
        selectedTask={selectedTask}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        onClearSelection={() => setSelectedTask(null)}
      />
    </div>
  );
};

export default TaskManager;
