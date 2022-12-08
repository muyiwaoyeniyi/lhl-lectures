import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = ({ url }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, [url]);

  // return data;
  // return [data, loading];
  return { data, loading };
};

export default useRequest;
