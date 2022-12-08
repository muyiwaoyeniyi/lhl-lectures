import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { setDocumentTitle } from "./helpers";
import useDocumentTitle from "./customHooks/useDocumentTitle";
import useRequest from "./customHooks/useRequest";

const getIdFromUrl = (url) => {
  return url.split("/")[6];
};

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
  //     setData(response.data.results);
  //     setLoading(false);
  //   });
  // }, []);

  const { data, loading } = useRequest({
    url: "https://pokeapi.co/api/v2/pokemon",
  });

  console.log("info", loading, data);

  // useEffect(() => {
  // document.title = 'PokemonList'
  //   setDocumentTitle("Pokemon List!!!!");
  // }, []);

  useDocumentTitle("Pokemon List");

  return (
    <div>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        data.results.map((pokemon) => {
          return (
            <div key={pokemon.name} className="pokemon-row">
              <NavLink to={`/pokemon/${pokemon.name}`}>
                <div>{pokemon.name} </div>
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromUrl(
                      pokemon.url
                    )}.png`}
                    width="50"
                    height="50"
                    alt="pokemon"
                  />
                </div>
              </NavLink>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
