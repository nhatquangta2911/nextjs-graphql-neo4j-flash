import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';

type Props = {};

const TaskList: React.FC<Props> = (props) => {
  return (
    <TabView renderActiveOnly={true}>
      <TabPanel header='Book Tracking' leftIcon='pi pi-tags'>
        <ScrollPanel style={{ width: '100%', height: '30vh' }}></ScrollPanel>
      </TabPanel>
      <TabPanel header='Financial Management' leftIcon='pi pi-tags'></TabPanel>
    </TabView>
  );
};

export default TaskList;
