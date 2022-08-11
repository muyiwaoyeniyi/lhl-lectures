import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "./useDocumentTitle";
import { useLocalStorage } from "./useLocalStorage";
import { useRequest } from "./useRequest";

export const Home = () => {
  useDocumentTitle({ title: "Pokemon List!!!!" });

  const { data, loading } = useRequest({
    url: "https://pokeapi.co/api/v2/pokemon",
  });

  const { value: recentlyViewed } = useLocalStorage({ key: "lastViewed" });

  const getIdFromUrl = (url) => {
    return url.split("/")[6];
  };

  return (
    <>
      <h3>Recently Viewed</h3>
      {recentlyViewed && <h5>{recentlyViewed.data}</h5>}
      <h3>Items</h3>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        data.results.map((p) => {
          return (
            <div key={p.name}>
              <NavLink to={`/pokemon/${p.name}`}>
                <div>
                  <img
                    width="50"
                    height="50"
                    alt="pokemon"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromUrl(
                      p.url
                    )}.png`}
                  />
                </div>
              </NavLink>
              <div>{p.name}</div>
            </div>
          );
        })
      )}
    </>
  );
};

// const [loading, setLoading] = useState(true);
// const [pokemons, setPokemons] = useState([]);

// useEffect(() => {
//   axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
//     console.log("response >>", response);
//     // setTimeout(() => {
//     setPokemons(response.data.results);
//     setLoading(false);
//     // }, 3000);
//   });
// }, []);
