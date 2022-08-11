import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = ({ key }) => {
  const [value, setValue] = useState("");

  const set = useCallback(
    (data) => {
      localStorage.setItem(key, JSON.stringify({ data: data }));
    },
    [key]
  );

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValue(JSON.parse(item));
    }
  }, [key]);

  return { value, set };
};
