interface GifItemProps {
  url: string;
  height: string;
  width: string;
  title: string;
}

const GifItem = ({
  url,
  title,
  height,
  width,
}: GifItemProps): React.ReactElement => {
  return (
    <div className="card">
      <img src={url} height={height} width={width} alt={title} />;
    </div>
  );
};

export default GifItem;
