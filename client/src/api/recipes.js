import { api } from "../config/default";

//get recipe by param
const getRecipesByParam = async (param) => {
  const response = await api.get(`/recipes/${param}`);
  return response.data;
};
//get recipe by uri
const getRecipeByURI = async (id) => {
  const response = await api.get(`/recipes/recipe/${id}`);
  return response.data;
};

export default {
  getRecipesByParam,
  getRecipeByURI,
};
