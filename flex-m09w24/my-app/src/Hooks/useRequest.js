import axios from "axios";
import { useEffect, useState } from "react";

export const useRequest = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log("response >>", response);
      // setTimeout(() => {
      setData(response.data);
      setLoading(false);
      // }, 3000);
    });
  }, [url]);

  return { data, loading };
};
