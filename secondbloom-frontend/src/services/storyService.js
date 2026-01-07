import api from "./api";

export const getAllStories = async () => {
  const response = await api.get("/stories");
  return response.data;
};
