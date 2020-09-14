import React, { createContext, useState, useEffect } from "react";
import data from "../dummyData";
import favoritesAPI from "../api/favorites";

export const DataContext = createContext();

// const myPromise = new Promise((resolve) => {
//   setTimeout(function () {
//     resolve(data);
//   }, 1000);
// });

export function DataProvider(props) {
  const [recipes, setRecipes] = useState([...data.hits]);
  const [loading, setLoading] = useState(false);
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
    const response = await favoritesAPI.getFavorites();
    setFavorites(response);
  };
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <DataContext.Provider value={{ recipes, loading, setLoading, favorites }}>
      {props.children}
    </DataContext.Provider>
  );
}
