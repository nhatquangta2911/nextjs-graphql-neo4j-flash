import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { TabView, TabPanel } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Container, Draggable } from "react-smooth-dnd";
import { GET_TASKS_BY_WEEKNO } from "../../graphql/query/task.query";
import { Task, TaskList as TaskListType } from "../../types";
import {
  ADD_TASK,
  ADD_TASK_INTO_WEEKLY_TASKLIST,
  UPDATE_TASKLIST,
} from "graphql/mutation/task.mutation";
import { TaskItemPrimary } from "./TaskItem/TaskItem.style";
import {
  TaskItemWrapper,
  TaskItemContent,
  TaskItemControl,
} from "./TaskItem/TaskItem.style";
import { Button } from "primereact/button";
import { UPDATE_TASK_STATUS } from "../../graphql/mutation/task.mutation";
import { applyDrag } from "helper/dnd";

type TaskListProps = {
  weekNo: string;
  displayDialog(): void;
};

const TaskList: React.FC<TaskListProps> = ({ weekNo, displayDialog }) => {
  const [selectedTask, setSelectedTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newTaskPrimary, setNewTaskPrimary] = useState(false);

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
  const taskDragAndDropList = taskList?.tasks.map((task: Task) => ({
    data: task?.title,
    id: task?._id,
    primary: task?.primary,
    status: task?.status,
  }));
  const [dndItems, setDndItems] = useState(taskDragAndDropList);
  useEffect(() => {
    setDndItems(taskDragAndDropList);
  }, [data]);

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
            primary: newTaskPrimary,
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
        <div className="p-inputgroup" style={{ margin: "2vh 0" }}>
          <span className="p-inputgroup-addon">
            <Checkbox
              checked={newTaskPrimary}
              onChange={() => setNewTaskPrimary(!newTaskPrimary)}
              tooltip="Important Task?"
            />
          </span>
          <InputText
            style={{ width: "100%" }}
            id="in"
            value={newTask}
            placeholder="Add your task here"
            onChange={handleTextChange}
            onKeyDown={handleAddTask}
          />
        </div>
        <ScrollPanel style={{ width: "100%", height: "52vh" }}>
          <Container onDrop={(e) => setDndItems(applyDrag(dndItems, e))}>
            {dndItems?.map((task) => (
              <Draggable key={task?.id}>
                <TaskItemWrapper done={task?.status === "Done"}>
                  <TaskItemPrimary primary={task?.primary}></TaskItemPrimary>
                  <TaskItemContent done={task?.status === "Done"}>
                    {task?.data}
                  </TaskItemContent>
                  <TaskItemControl>
                    <Button
                      disabled={task?.status === "Done"}
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
