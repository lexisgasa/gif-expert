import { GiphyGif } from "../types";

const apiKey = "hbK1Xn6PlBnsZPyDgwRbV6cZLUCFTjV4";
// const apiKey2 = "inze4I6lMfh8xJyejrwCfBlejYXKdo8Y";

const fetchGifs = async (input: string): Promise<GiphyGif[]> => {
  const apiResponse = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input}&limit=5`
  );
  const { data } = await apiResponse.json();

  const gifsData: GiphyGif[] = data.map((gif: GiphyGif) => {
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
