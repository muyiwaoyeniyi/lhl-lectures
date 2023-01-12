import { useEffect } from "react";
import { setDocumentTitle } from "../helpers";

const useDocumentTitle = (title) => {
  useEffect(() => {
    setDocumentTitle(title);
  }, [title]);

  return null;
};

export default useDocumentTitle;
