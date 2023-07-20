import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import splitUrl from "../helpers/splitUrl";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useRequest from "../hooks/useRequest";

const Home = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
  //     // setTimeout(() => {
  //     setData(response.data.results);
  //     setLoading(false);
  //     // }, 3000);
  //   });
  // }, []);

  const payload = useRequest({ url: "https://pokeapi.co/api/v2/pokemon" });

  // document.title = "Home!!";

  // useEffect(() => {
  //   document.title = "Home!!";
  // }, []);

  useDocumentTitle("Home Page!");

  return payload.loading ? (
    <Skeleton count={5} />
  ) : (
    payload.data.results.map((pokemon) => {
      const id = splitUrl(pokemon.url);
      return (
        <a href={`pokemon/${id}`}>
          <div className="pokemon-row">
            <div>{pokemon.name}</div>
            <div>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                width={50}
                height={50}
                alt="pokemon"
              />
            </div>
          </div>
        </a>
      );
    })
  );
};

export default Home;
