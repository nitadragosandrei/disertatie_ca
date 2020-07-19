import axios from "axios";

const client = axios.create({
  baseURL: " https://2d3o674m1c.execute-api.eu-central-1.amazonaws.com/dev/",
});

export const getItems = () => {
  return client.get("/getTest");
};

export const postItem = (item) => {
  client.post("putTest", item);
};
