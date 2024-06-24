import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TaskList.css';

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleTaskStatus }) => {
  const { t } = useTranslation();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (key) => {
    if (!sortConfig.key) {
      return;
    }
    return sortConfig.key === key ? sortConfig.direction : undefined;
  };

  const getRowClass = (task) => {
    if (task.status === 'ready') {
      return 'task-row-success';
    } else if (new Date(task.deadline) < new Date()) {
      return 'task-row-danger';
    } else {
      return 'task-row-warning';
    }
  };

  return (
    <div className="task-list">
      <div className="task-list-header">
        <div onClick={() => requestSort('title')} className={`task-list-header-item ${getClassNamesFor('title')}`}>{t('Title')}</div>
        <div onClick={() => requestSort('description')} className={`task-list-header-item ${getClassNamesFor('description')}`}>{t('Description')}</div>
        <div onClick={() => requestSort('subject')} className={`task-list-header-item ${getClassNamesFor('subject')}`}>{t('Subject')}</div>
        <div onClick={() => requestSort('deadline')} className={`task-list-header-item ${getClassNamesFor('deadline')}`}>{t('Deadline')}</div>
        <div onClick={() => requestSort('status')} className={`task-list-header-item ${getClassNamesFor('status')}`}>{t('Status')}</div>
        <div className="task-list-header-item">{t('Actions')}</div>
      </div>
      {sortedTasks.map((task) => (
        <div key={task.id} className={`task-row ${getRowClass(task)}`}>
          <div className="task-row-item">{task.title}</div>
          <div className="task-row-item">{task.description}</div>
          <div className="task-row-item">{task.subject}</div>
          <div className="task-row-item">{task.deadline}</div>
          <div className="task-row-item">
            {task.status === 'ready' ? t('Ready') : t('Not ready')} - {new Date(task.deadline) < new Date() ? t('Overdue') : t('Not Overdue')}
          </div>
          <div className="task-row-item">
            <button onClick={() => onEditTask(task)} className="btn btn-warning btn-sm me-2">{t('Edit')}</button>
            <button onClick={() => onDeleteTask(task.id)} className="btn btn-danger btn-sm me-2">{t('Delete')}</button>
            <button onClick={() => onToggleTaskStatus(task.id)} className="btn btn-secondary btn-sm">
              {task.status === 'ready' ? t('Mark as Not Ready') : t('Mark as Ready')}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
