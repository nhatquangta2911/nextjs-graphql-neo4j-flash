import React from 'react';
import { TabPanel, TabView } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';
import GithubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

type Props = {
  github: string;
};

const Tracking: React.FC<Props> = (props) => {
  const { github } = props;
  return (
    <TabView renderActiveOnly={true}>
      <TabPanel header='Github Contributions' leftIcon='pi pi-chart-bar'>
        <ScrollPanel style={{ width: '100%', height: '30vh' }}>
          <GithubCalendar
            username={github}
            color='hsl(203, 82%, 33%)'
            fontSize={12}
          >
            <ReactTooltip delayShow={50} html />
          </GithubCalendar>
        </ScrollPanel>
      </TabPanel>
      <TabPanel header='Calendar' leftIcon='pi pi-calendar'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure
        labore quasi maxime enim fugiat eligendi quidem illo laborum. Sed
        quibusdam ullam ex. Aspernatur nulla autem maiores, impedit pariatur
        labore!
      </TabPanel>
      <TabPanel header='Weekly Tasks' leftIcon='pi pi-list'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure
        labore quasi maxime enim fugiat eligendi quidem illo laborum. Sed
        quibusdam ullam ex. Aspernatur nulla autem maiores, impedit pariatur
        labore!
      </TabPanel>
    </TabView>
  );
};

export default Tracking;
