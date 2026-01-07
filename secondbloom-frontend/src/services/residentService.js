import api from "./api";

export const getAllResidents = async () => {
  const response = await api.get("/residents");
  return response.data;
};
