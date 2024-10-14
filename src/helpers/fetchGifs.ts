import { Gif, GiphyGif } from "../types";

const fetchGifs = async (input: string): Promise<Gif[]> => {
  const apiResponse = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_API_KEY
    }&q=${input}&limit=5`
  );
  const { data } = await apiResponse.json();

  const gifsData: Gif[] = data.map((gif: GiphyGif) => {
    const {
      id,
      title,
      images: {
        fixed_height: { height, width, url },
      },
    } = gif;

    return { id, title, height, width, url };
  });

  console.log(gifsData);
  return gifsData;
};

export default fetchGifs;
