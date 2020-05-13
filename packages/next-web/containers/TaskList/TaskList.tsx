import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { TabView, TabPanel } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import { ListBox } from "primereact/listbox";
import { InputText } from "primereact/inputtext";
import { Container, Draggable } from "react-smooth-dnd";
import { GET_TASKS_BY_WEEKNO } from "../../graphql/query/task.query";
import { Task, TaskList as TaskListType } from "../../types";
import {
  ADD_TASK,
  ADD_TASK_INTO_WEEKLY_TASKLIST,
  UPDATE_TASKLIST,
} from "graphql/mutation/task.mutation";
import TaskItem from "./TaskItem/TaskItem";
import { TaskItemPrimary } from "./TaskItem/TaskItem.style";
import {
  TaskItemWrapper,
  TaskItemContent,
  TaskItemControl,
} from "./TaskItem/TaskItem.style";
import { Button } from "primereact/button";
import { UPDATE_TASK_STATUS } from "../../graphql/mutation/task.mutation";

type Props = {
  weekNo: string;
  displayDialog(): void;
};

const items = [
  {
    label: "Edit",
    icon: "pi pi-refresh",
    command: (e): void => alert(e),
  },
  {
    label: "Delete",
    icon: "pi pi-times",
    command: (e): void => alert(e),
  },
];

const TaskList: React.FC<Props> = ({ weekNo, displayDialog }) => {
  const [selectedTask, setSelectedTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [addTask] = useMutation(ADD_TASK);
  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS);
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
  const taskDragAndDropList = taskList?.tasks.map((task: Task) => ({
    data: task?.title,
    id: task?._id,
    primary: task?.primary,
    status: task?.status,
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
            status: "Doing",
          },
        });
        await updateTaskList({
          variables: {
            total: taskList?.total + 1,
            weekNo,
            completed: taskList?.completed,
          },
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

  const handleTaskDone = async (title) => {
    try {
      await updateTaskStatus({
        variables: { title: title, status: "Done" },
      });
      await updateTaskList({
        variables: {
          total: taskList?.total,
          weekNo,
          completed: taskList?.completed + 1,
        },
      });
      displayDialog();
      await refetch();
    } catch (error) {
      console.log(error, error.message);
    }
  };

  const completedRate: string = (
    taskList?.completed / parseFloat(taskList?.total) || 0.001
  ).toFixed(2);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <TabView renderActiveOnly={true}>
      <TabPanel header="Task List" leftIcon="pi pi-tags">
        <h3>{taskList?.weekNo}</h3>
        <p>Total: {taskList?.total}</p>
        <p>
          Completed: {taskList?.completed} (
          {Math.round(parseFloat(completedRate) * 100)}
          %)
        </p>
        <InputText
          id="in"
          style={{ width: "100%", margin: "10px 0" }}
          value={newTask}
          placeholder="add here..."
          onChange={handleTextChange}
          onKeyDown={handleAddTask}
        />
        <ScrollPanel style={{ width: "100%", height: "52vh" }}>
          {/* <ListBox
            style={{ width: '100%' }}
            filterPlaceholder='Find'
            multiple={true}
            options={taskUIList}
            value={ || 0}
            onChange={(e) => setSelectedTasks(e.value)}
          /> */}
          <Container>
            {taskDragAndDropList?.map((task) => (
              <Draggable key={task?.id}>
                <TaskItemWrapper done={task?.status === "Done"}>
                  <TaskItemPrimary primary={task?.primary}></TaskItemPrimary>
                  <TaskItemContent done={task?.status === "Done"}>
                    {task?.data}
                  </TaskItemContent>
                  <TaskItemControl>
                    <Button
                      icon="pi pi-check"
                      className="p-button-secondary"
                      onClick={() => handleTaskDone(task?.data)}
                    />
                  </TaskItemControl>
                </TaskItemWrapper>
              </Draggable>
            ))}
          </Container>
        </ScrollPanel>
      </TabPanel>
    </TabView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  displayDialog: () => {
    dispatch({
      type: "DISPLAY_DIALOG",
    });
  },
});

export default connect(null, mapDispatchToProps)(TaskList);
