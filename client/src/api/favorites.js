import { api } from "../config/default";

//get all favorites
const getFavorites = async () => {
  const response = await api.get(`/favorites/`);
  return response.data;
};

//get all favorites by user id
const getFavoritesByUserId = async (user) => {
  const response = await api.get(`/favorites/user/${user}`);
  return response.data;
};

//delete favorite by recipe label
const removeFavorite = async (recipe) => {
  const response = await api.delete(`/favorites/recipe/${recipe}`);
  console.log(response);
  return response.data;
};
//add favorite
const addFavorite = async (recipe) => {
  const {
    label,
    totalTime,
    image,
    ingredientLines,
    totalNutrients,
    totalWeight,
    user,
  } = recipe;
  const favorite = {
    label,
    yield: recipe["yield"],
    totalTime,
    image,
    ingredientLines,
    totalNutrients,
    totalWeight,
    user,
  };
  const config = { contentType: "application-json" };
  const response = await api.post(`/favorites`, favorite, config);

  return response.data;
};

export default {
  getFavorites,
  getFavoritesByUserId,
  removeFavorite,
  addFavorite,
};
