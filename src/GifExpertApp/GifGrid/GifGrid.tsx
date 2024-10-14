import { useEffect, useState } from "react";
import fetchGifs from "../../helpers/fetchGifs";
import { Gif } from "../../types";

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
      <ul>
        <li>
          <h3>{category} </h3>
          <ul>
            {gifs &&
              gifs.map((gif) => (
                <li key={gif.id}>
                  <img
                    src={gif.url}
                    height={gif.height}
                    width={gif.width}
                    alt={gif.title}
                  />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default GifGrid;
