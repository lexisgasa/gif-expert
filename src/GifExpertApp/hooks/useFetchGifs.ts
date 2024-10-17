import { useEffect, useState } from "react";
import { Gif } from "../../types";
import fetchGifs from "../../helpers/fetchGifs";

const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchedGifs = await fetchGifs(category);
      setGifs(fetchedGifs);
      setIsLoading(false);
    })();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};

export default useFetchGifs;
