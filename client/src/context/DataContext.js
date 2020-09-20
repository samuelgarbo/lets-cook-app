import React, { createContext, useState } from "react";
import favoritesAPI from "../api/favorites";
import recipesAPI from "../api/recipes";

export const DataContext = createContext();

export function DataProvider(props) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const getFavorites = async () => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const response = await favoritesAPI.getFavoritesByUserId(user._id, token);
    setFavorites(response);
    setLoading(false);
  };
  //Get recipe from EdamamAPI by key word
  const fetchRecipes = async (param) => {
    setLoading(true);
    const response = await recipesAPI.getRecipesByParam(param);
    const arr = response.hits.map((val) => val.recipe);
    setRecipes([...arr]);
    setLoading(false);
  };
  //Get recipe from EdamamAPI by uri
  const fetchOneRecipe = async (id) => {
    setLoading(true);
    const response = await recipesAPI.getRecipeByURI(id);
    setCurrentRecipe(response[0]);
    setLoading(false);
  };

  return (
    <DataContext.Provider
      value={{
        recipes,
        loading,
        setLoading,
        favorites,
        loadingComments,
        setLoadingComments,
        fetchRecipes,
        fetchOneRecipe,
        getFavorites,
        setFavorites,
        currentRecipe,
        setCurrentRecipe,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
