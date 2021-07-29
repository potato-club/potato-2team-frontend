import { createRequest } from "../services/createRequest";

const request = createRequest();

export const getUser = async (uri) => {
  return await request("get", uri);
};
