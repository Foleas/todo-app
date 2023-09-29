import axios, { type AxiosResponse } from "axios";

const fetchData = async (url: string): Promise<AxiosResponse> =>
  await axios.get(url);

export default { fetchData };
