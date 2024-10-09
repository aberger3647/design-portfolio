import { Resource } from "../assets/resources"; // imports interface
import Iframe from "react-iframe";

interface ImageGridProps {
  resource: Resource;
}

export const Detail: React.FC<ImageGridProps> = ({ resource }) => {
  console.log(resource.links[0]);
  return (
    <main>
      <h1>{resource.title}</h1>
      <p className="sm:w-1/2 my-4 text-center">{resource.description}</p>
      
      <div className="sm:w-11/12 w-full">
        <div className="relative pt-3 aspect-video absoulute top-0 left-0 w-full h-full">
          <Iframe
            url={resource.links[0]}
            className="w-full h-full"
            allow="autoplay; fullscreen;"
          ></Iframe>
        </div>
      </div>
    </main>
  );
};
