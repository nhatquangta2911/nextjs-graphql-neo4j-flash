import React from "react";
import { TabPanel, TabView } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import GithubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Spinner } from "components";

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
        {!github ||
          (github === "" && (
            <Spinner
              small
              message="Something went wrong. Please try loading the page again."
            />
          ))}
        <GithubCalendar
          username={github}
          color="hsl(203, 82%, 33%)"
          fontSize={12}
        >
          <ReactTooltip delayShow={50} html />
        </GithubCalendar>
      </TabPanel>
      <TabPanel
        header="Health Tracking"
        leftIcon="pi pi-calendar"
        contentStyle={{ width: "100%", height: "100%" }}
      >
        <Spinner small message="Update soon" />
      </TabPanel>
      <TabPanel
        header="Financial Management"
        leftIcon="pi pi-list"
        contentStyle={{ width: "100%", height: "100%" }}
      >
        <Spinner small message="Update soon" />
      </TabPanel>
    </TabView>
  );
};

export default Tracking;
