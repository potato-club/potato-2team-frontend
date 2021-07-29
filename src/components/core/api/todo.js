import { createRequest } from "../services/createRequest";

const request = createRequest();

export const getTodo = async (uri) => {
  return await request("get", uri);
};

export const setTodo = async (uri, res) => {
  return await request("post", uri, res);
};

export const updateTodo = async (uri, res) => {
  return await request("put", uri, res);
};

export const deleteTodo = async (uri) => {
  return await request("delete", uri);
};
