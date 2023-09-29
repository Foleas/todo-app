import { map } from "nanostores";
import type { Task } from "../types";

const tasks = map<Record<string, Task>>({});

const addItem = ({ id, title, createdAt, completed }: Task) => {
  tasks.setKey(id, { id, title, createdAt, completed });
};

export default { tasks, addItem };
