import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { TabView, TabPanel } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import { ListBox } from "primereact/listbox";
import { InputText } from "primereact/inputtext";
import { GET_TASKS_BY_WEEKNO } from "../../graphql/query/task.query";
import { Task, TaskList as TaskListType } from "../../types";
import {
  ADD_TASK,
  ADD_TASK_INTO_WEEKLY_TASKLIST,
  UPDATE_TASKLIST,
} from "graphql/mutation/task.mutation";
import { getWeekDescription } from "helper/dateTime";

type Props = {
  weekNo: string;
};

const TaskList: React.FC<Props> = ({ weekNo }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [addTask] = useMutation(ADD_TASK);
  const [updateTaskList] = useMutation(UPDATE_TASKLIST);
  const [addTaskIntoWeeklyTaskList] = useMutation(
    ADD_TASK_INTO_WEEKLY_TASKLIST
  );
  const { loading, error, data, refetch } = useQuery(GET_TASKS_BY_WEEKNO, {
    variables: { weekNo },
  });
  const taskList = data?.TaskList[0];
  const taskUIList = taskList?.tasks.map((task: Task) => ({
    label: task?.title,
    value: task?._id,
  }));

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: any
  ) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key == "Enter") {
      try {
        await addTask({
          variables: {
            title: newTask,
            primary: false,
          },
        });
        await updateTaskList({
          variables: { total: taskList?.total + 1, weekNo },
        });
        await addTaskIntoWeeklyTaskList({
          variables: { from: { weekNo }, to: { title: newTask } },
        });
        await refetch();
        setNewTask("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <TabView renderActiveOnly={true}>
      <TabPanel header="Task List" leftIcon="pi pi-tags">
        <ScrollPanel style={{ width: "100%", height: "70vh" }}>
          <h3>{getWeekDescription(taskList?.weekNo)}</h3>
          <p>Total: {taskList?.total}</p>
          <p>
            Completed: {taskList?.completed} (
            {Math.round(taskList?.completed / taskList?.total) * 100}%)
          </p>
          <InputText
            id="in"
            style={{ width: "100%", margin: "10px 0" }}
            value={newTask}
            onChange={handleTextChange}
            onKeyDown={handleAddTask}
          />
          <ListBox
            style={{ width: "100%" }}
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
