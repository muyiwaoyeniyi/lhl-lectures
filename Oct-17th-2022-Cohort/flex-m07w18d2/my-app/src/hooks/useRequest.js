import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log("response", response);
      setData(response.data);
      setLoading(false);
    });
  }, [url]);

  console.log("in hook", data, loading);

  return { data, loading };
};

export default useRequest;
