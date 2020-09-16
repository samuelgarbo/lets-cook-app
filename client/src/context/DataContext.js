import React, { createContext, useState, useEffect } from "react";
import data from "../dummyData";
import favoritesAPI from "../api/favorites";
import recipesAPI from "../api/recipes";

export const DataContext = createContext();

// const myPromise = new Promise((resolve) => {
//   setTimeout(function () {
//     resolve(data);
//   }, 1000);
// });

export function DataProvider(props) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [favorites, setFavorites] = useState([]);
  // const url = config.edamamAPI
  // const loadData=()=>{
  //   setLoading(true);
  //   // fetch(URL)
  //   myPromise
  //     // .then((response) => response.json())
  //     .then((data) => setRecipes([...data.hits]))
  //     .then(() => setLoading(false));
  // }
  // useEffect(() => {
  //   loadData()
  // }, []);
  const getFavorites = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await favoritesAPI.getFavoritesByUserId(user._id);
    setFavorites(response);
  };
  const loadData = () => {
    setLoading(true);
    console.log("loading");
    setRecipes([...data.hits]);
    getFavorites();
    setLoading(false);
    console.log("ready");
  };
  const fetchRecipes = async (param) => {
    setLoading(true);
    const response = await recipesAPI.getRecipesByParam(param);
    setRecipes([...response.hits]);
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);

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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
