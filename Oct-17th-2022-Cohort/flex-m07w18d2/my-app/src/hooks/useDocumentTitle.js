import { useEffect } from "react";
// import { documentTitle } from "../helpers/documentTitle";

const useDocumentTitle = (titleArr) => {
  useEffect(() => {
    // documentTitle(title);
    document.title = "Welcome, " + titleArr[0];
  }, [titleArr]);

  return undefined;
};

export default useDocumentTitle;
