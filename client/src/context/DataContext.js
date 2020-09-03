import React, { createContext, useState } from "react";
import data from "../dummyData";

export const DataContext = createContext();

// const myPromise = new Promise((resolve) => {
//   setTimeout(function () {
//     resolve(data);
//   }, 1000);
// });

export function DataProvider(props) {
  const [recipes, setRecipes] = useState([...data.hits]);
  const [loading, setLoading] = useState(false);
  // const url = process.env.REACT_APP_edamamURL
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

  return (
    <DataContext.Provider value={{recipes, loading}}>
      {props.children}
    </DataContext.Provider>
  );
}
