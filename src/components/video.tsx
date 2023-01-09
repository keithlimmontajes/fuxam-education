import ReactPlayer from "react-player";

interface PropTypes {
  url: string;
}

const ReactPlayerComponent = ({ url }: PropTypes) => {
  return <ReactPlayer height={500} width={"100%"} url={url} />;
};

export default ReactPlayerComponent;
