import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TaskForm = ({ selectedTask, onAddTask, onUpdateTask, onClearSelection }) => {
  const { t } = useTranslation();
  const defaultTask = {
    title: '',
    description: '',
    subject: '',
    deadline: 0, //new Date().toISOString().split('T')[0]
    status: 'not ready'
  };

  const [task, setTask] = useState(defaultTask);

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask(defaultTask);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isOverdue = new Date(task.deadline) < new Date();
    const updatedTask = { ...task, overdue: isOverdue ? 'overdue' : 'not overdue' };
    if (task.id) {
      onUpdateTask(updatedTask);
    } else {
      onAddTask(updatedTask);
    }
    onClearSelection();
    setTask(defaultTask);
  };

  return (
    <div className="task-form">
      <h2>{selectedTask ? t('Edit assignment') : t('Add assignment')}</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input type="text" name="title" value={task.title} onChange={handleChange} placeholder={t('Title')} className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="text" name="description" value={task.description} onChange={handleChange} placeholder={t('Description')} className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="text" name="subject" value={task.subject} onChange={handleChange} placeholder={t('Subject')} className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="date" name="deadline" value={task.deadline} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <select name="status" value={task.status} onChange={handleChange} className="form-control">
            <option value="not ready">{t('Not ready')}</option>
            <option value="ready">{t('Ready')}</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">{t('Save')}</button>
      </form>
    </div>
  );
};

export default TaskForm;
