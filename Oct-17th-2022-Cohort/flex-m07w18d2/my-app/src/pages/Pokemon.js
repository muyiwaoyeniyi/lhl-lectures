import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { documentTitle } from "../helpers/documentTitle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useRequest from "../hooks/useRequest";

const Pokemon = () => {
  const params = useParams();

  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${params.name}/`)
  //     .then((response) => {
  //       console.log("response", response);
  //       setData(response.data);
  //       setLoading(false);
  //     });
  // }, [params.name]);

  const response = useRequest(
    `https://pokeapi.co/api/v2/pokemon/${params.name}/`
  );

  // useEffect(() => {
  //   documentTitle(loading ? "loading" : data.name);
  //    document.title = loading ? "loading" : "Welcome " + data.name;
  // }, [data, loading]);
  useDocumentTitle(response.loading ? "loading" : "" + response.data.name);

  if (response.loading) return "Loading...";

  // console.log("data", data);

  return (
    <div>
      <div>Pokemon page</div>
      <div>{response.data.name}</div>
      <div>{response.data.weight}</div>
      <div>{response.data.height}</div>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`}
          width={50}
          height={50}
          alt="pokemon"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Pokemon;
