// import axios from "axios";
// import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
// import { documentTitle } from "../helpers/documentTitle";

import { splitUrl } from "../helpers/splitUrl";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useRequest from "../hooks/useRequest";

function Home() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
  //     // setTimeout(() => {
  //     setData(response.data.results);
  //     setLoading(false);
  //     // }, 1000);
  //   });
  // }, []);

  const response = useRequest("https://pokeapi.co/api/v2/pokemon");

  // useEffect(() => {
  //   documentTitle("Home page");
  // }, []);
  useDocumentTitle("Home page");

  if (response.loading)
    return (
      <div>
        <Skeleton count={20} width={150} />
      </div>
    );

  return (
    <div className="App">
      {response.data.results.map((item) => {
        return (
          <a href={`/pokemon/${item.name}`}>
            <div className="pokemon-row">
              <div>{item.name}</div>
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${splitUrl(
                    item.url
                  )}.png`}
                  width={50}
                  height={50}
                  alt="pokemon"
                />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Home;
