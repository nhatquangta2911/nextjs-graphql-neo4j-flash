import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TabView, TabPanel } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ListBox } from 'primereact/listbox';
import { GET_ALL_TASKS } from '../../graphql/query/task.query';
import { Task } from '../../types';

type Props = {};

type SearchType = {
  label: String;
  vaue: String;
};

const TaskList: React.FC<Props> = (props) => {
  const { data, error } = useQuery(GET_ALL_TASKS, { variables: { _id: '1' } });
  const taskList: [SearchType] = data?.Task?.map((task: Task) => ({
    label: task?.title,
    value: task?._id,
  }));
  return (
    <TabView renderActiveOnly={true}>
      <TabPanel header='Task List' leftIcon='pi pi-tags'>
        <ScrollPanel style={{ width: '100%', height: '30vh' }}>
          <ListBox
            filter={true}
            filterPlaceholder='Find'
            multiple={true}
            options={taskList}
          />
        </ScrollPanel>
      </TabPanel>
    </TabView>
  );
};

export default TaskList;
