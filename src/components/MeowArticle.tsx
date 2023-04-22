"use client";

import { useEffect, useState } from "react";

const MeowArticle = () => {
  const [results, setResults] = useState("Loading...");

  const catsData = async () => {
    const res = await fetch("http://meowfacts.herokuapp.com", {
      next: { revalidate: 3 },
    });
    const data = await res.json();
    const result = data.data;
    setResults(result);
  };

//   컴포넌트가 처음 마운트 될 때 딱 한 번 catsDate 함수 내 fetch 가 실행토록 한다.
  useEffect(() => {
    catsData();
  }, []);

  return <div>{results}</div>;
};

export default MeowArticle;
