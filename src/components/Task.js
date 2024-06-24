import React from 'react';
import { useTranslation } from 'react-i18next';

const Task = ({ task, onEditTask, onDeleteTask, onToggleTaskStatus }) => {
  const { t } = useTranslation();
  const isOverdue = new Date(task.deadline) < new Date();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text"><strong>{t('Subject')}:</strong> {task.subject}</p>
        <p className="card-text"><strong>{t('Deadline')}:</strong> {task.deadline}</p>
        <p className="card-text"><strong>{t('Status')}:</strong> {task.status}</p>
        <p className="card-text"><strong>{t('Overdue')}:</strong> {isOverdue ? t('Overdue') : t('Not Overdue')}</p>
        <button onClick={() => onEditTask(task)} className="btn btn-warning me-2">{t('Edit')}</button>
        <button onClick={() => onDeleteTask(task.id)} className="btn btn-danger me-2">{t('Delete')}</button>
        <button onClick={() => onToggleTaskStatus(task.id)} className="btn btn-secondary">
          {task.status === 'ready' ? t('Mark as Not Ready') : t('Mark as Ready')}
        </button>
      </div>
    </div>
  );
};

export default Task;
