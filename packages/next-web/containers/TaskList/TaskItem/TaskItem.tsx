import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Task } from '../../../types/index';
import withApollo from '../../../pages/tracking';
import {
  TaskItemWrapper,
  TaskItemContent,
  TaskItemControl,
  TaskItemPrimary,
} from './TaskItem.style';

export interface TaskItemProps {
  task: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <TaskItemWrapper>
      <TaskItemPrimary>1</TaskItemPrimary>
      <TaskItemContent>{task}</TaskItemContent>
      <TaskItemControl>OK</TaskItemControl>
    </TaskItemWrapper>
  );
};

export default TaskItem;
