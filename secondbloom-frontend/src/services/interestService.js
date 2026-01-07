import api from "./api";

export const getAllInterests = async () => {
  const response = await api.get("/interests");
  return response.data;
};

export const assignInterestsToResident = async (residentId, interestIds) => {
  await api.post(`/residents/${residentId}/interests`, interestIds);
};
