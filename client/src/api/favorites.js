import { api } from "../config/default";

//get all favorites
const getFavorites = async (token) => {
  const config = {
    authorization: `bearer ${token}`,
  };
  const response = await api.get(`/favorites/`, { headers: config });
  return response.data;
};

//get all favorites by user id
const getFavoritesByUserId = async (user, token) => {
  const config = {
    authorization: `bearer ${token}`,
  };
  const response = await api.get(`/favorites/user/${user}`, {
    headers: config,
  });
  return response.data;
};

//delete favorite by recipe label
const removeFavorite = async (recipe, token) => {
  const config = {
    authorization: `bearer ${token}`,
  };
  const response = await api.delete(`/favorites/recipe/${recipe}`, {
    headers: config,
  });
  return response.data;
};
//add favorite
const addFavorite = async (recipe, token) => {
  const {
    label,
    totalTime,
    image,
    ingredientLines,
    totalNutrients,
    totalWeight,
    user,
    uri,
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
    uri,
  };
  const config = {
    contentType: "application/json",
    authorization: `bearer ${token}`,
  };
  const response = await api.post("/favorites", favorite, { headers: config });
  return response.data;
};

export default {
  getFavorites,
  getFavoritesByUserId,
  removeFavorite,
  addFavorite,
};
