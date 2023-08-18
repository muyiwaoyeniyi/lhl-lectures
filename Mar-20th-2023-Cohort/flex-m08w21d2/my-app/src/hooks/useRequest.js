// 1. fetch, hold and return data
// 2. need to have a loading state
// 3. user must send in url

import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = (info) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(info.url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, [info.url]);

  return { data, loading };
};

export default useRequest;
