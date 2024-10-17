export interface GiphyGif {
  id: string;
  title: string;
  images: {
    fixed_height: { height: string; width: string; url: string };
  };
}

export interface Gif {
  id: string;
  title: string;
  url: string;
  height: string;
  width: string;
}
