import httpService from "./httpsService";
import type { Task } from "../types";
import type { AxiosResponse } from "axios";
import taskStore from "../store/taskStore";

const get = async (url: string): Promise<void> => {
  try {
    const response: AxiosResponse<Task[]> = await httpService.fetchData(url);
    if (response.data) {
      response.data.forEach(({ id, title, createdAt, completed }: Task) => {
        taskStore.tasks.setKey(id, { id, title, createdAt, completed });
      });
    }
  } catch (error) {
    // Handle errors here if needed
    throw error;
  }
};

export default { get };
