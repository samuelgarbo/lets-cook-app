import { api } from "../config/default";

//get all favorites
const getRecipesByParam = async (param) => {
  const response = await api.get(`/recipes/${param}`);
  return response.data;
};

export default {
  getRecipesByParam,
};
