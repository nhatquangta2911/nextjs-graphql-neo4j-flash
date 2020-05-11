import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { TabView, TabPanel } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import { ListBox } from "primereact/listbox";
import {
  GET_ALL_TASKS,
  GET_TASKS_BY_WEEKNO,
} from "../../graphql/query/task.query";
import { Task } from "../../types";

type Props = {};

type SearchType = {
  label: String;
  vaue: String;
};

const TaskList: React.FC<Props> = (props) => {
  const [selectedTasks, setSelectedTasks] = useState(["3"]);

  const { data, error } = useQuery(GET_TASKS_BY_WEEKNO, {
    variables: { weekNo: "202019" },
  });
  const weeklyTaskList = data?.TaskList[0];
  const tasks = data?.TaskList[0]?.tasks;
  const taskUIList: [SearchType] = tasks?.map((task: Task) => ({
    label: task?.title,
    value: task?._id,
  }));

  console.log(selectedTasks);
  return (
    <TabView renderActiveOnly={true}>
      <TabPanel header="Task List" leftIcon="pi pi-tags">
        <ScrollPanel style={{ width: "100%", height: "30vh" }}>
          <p>Week: {weeklyTaskList?.weekNo}</p>
          <p>Total: {weeklyTaskList?.total}</p>
          <p>Completed: {weeklyTaskList?.completed}</p>
          <ListBox
            filter={true}
            filterPlaceholder="Find"
            multiple={true}
            options={taskUIList}
            value={selectedTasks || 0}
            onChange={(e) => setSelectedTasks(e.value)}
          />
        </ScrollPanel>
      </TabPanel>
    </TabView>
  );
};

export default TaskList;
