import React from "react";
import { TabPanel, TabView } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import GithubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

type Props = {
  github: string;
};

const Tracking: React.FC<Props> = (props) => {
  const { github } = props;
  return (
    <TabView renderActiveOnly={true} style={{ width: "100%", height: "auto" }}>
      <TabPanel
        header="Github Contributions"
        leftIcon="pi pi-chart-bar"
        contentStyle={{ width: "100%", height: "100%" }}
      >
        <GithubCalendar
          username={github}
          color="hsl(203, 82%, 33%)"
          fontSize={12}
        >
          <ReactTooltip delayShow={50} html />
        </GithubCalendar>
      </TabPanel>
      <TabPanel header="Book Tracking" leftIcon="pi pi-calendar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure
        labore quasi maxime enim fugiat eligendi quidem illo laborum. Sed
        quibusdam ullam ex. Aspernatur nulla autem maiores, impedit pariatur
        labore!
      </TabPanel>
      <TabPanel header="Financial Management" leftIcon="pi pi-list">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure
        labore quasi maxime enim fugiat eligendi quidem illo laborum. Sed
        quibusdam ullam ex. Aspernatur nulla autem maiores, impedit pariatur
        labore!
      </TabPanel>
    </TabView>
  );
};

export default Tracking;
