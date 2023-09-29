import { useEffect, useState } from "react";
import taskService from "../../services/taskService";
import { useStore } from "@nanostores/react";
import taskStore from "../../store/taskStore";
import { IconLoading } from "../../utils/getIcons";
import TaskItem from "../TaskItem";

const TaskList = () => {
  const $tasks = useStore(taskStore.tasks);
  //console.log("$tasks", $tasks);

  useEffect(() => {
    taskService.get("./data/tasks.json");
  }, []);

  const renderTasks = () => {
    if (Object.keys($tasks).length) {
      return Object.values($tasks).map(({ id, title, completed }) => (
        <TaskItem key={`task-${id}`} title={title} completed={completed} />
      ));
    } else {
      return <IconLoading />;
    }
  };

  return (
    <div className="overflow-hidden rounded-md shadow-2xl">{renderTasks()}</div>
  );
};

export default TaskList;
