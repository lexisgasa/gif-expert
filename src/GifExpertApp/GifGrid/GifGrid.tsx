import GifItem from "../GifItem/GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

interface GifGridProps {
  category: string;
}

const GifGrid = ({ category }: GifGridProps): React.ReactElement => {
  const { gifs } = useFetchGifs(category);

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
