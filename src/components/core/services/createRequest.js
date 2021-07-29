import axios from "axios";

export const createRequest = () => {
  return async function request(type, uri, res) {
    if (type === "get") {
      return await axios.get(uri, {
        headers: {
          Authorization: localStorage.getItem("userKey"),
        },
      });
    } else if (type === "post") {
      return await axios.post(uri, res, {
        headers: {
          Authorization: localStorage.getItem("userKey"),
        },
      });
    } else if (type === "put") {
      return await axios.put(uri, res, {
        headers: {
          Authorization: localStorage.getItem("userKey"),
        },
      });
    } else if (type === "delete") {
      return await axios.delete(uri, {
        headers: {
          Authorization: localStorage.getItem("userKey"),
        },
      });
    }
  };
};
