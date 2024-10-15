import { useEffect, useState } from "react";
import fetchGifs from "../../helpers/fetchGifs";
import { Gif } from "../../types";
import GifItem from "../GifItem/GifItem";

interface GifGridProps {
  category: string;
}

const GifGrid = ({ category }: GifGridProps): React.ReactElement => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedGifs = await fetchGifs(category);
      setGifs(fetchedGifs);
    })();
  }, [category]);

  return (
    <>
      <h2>{category} </h2>
      <div className="card-grid">
        {gifs && gifs.map((gif) => <GifItem key={gif.id} {...gif} />)}
      </div>
    </>
  );
};

export default GifGrid;
