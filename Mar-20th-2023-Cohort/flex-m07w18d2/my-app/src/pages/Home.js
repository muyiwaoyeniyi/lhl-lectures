import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import splitUrl from "../helpers/splitUrl";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setData(response.data.results);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    document.title = "Home!!";
  }, []);

  return loading ? (
    <Skeleton count={5} />
  ) : (
    data.results.map((pokemon) => {
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
