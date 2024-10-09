import { Link } from "react-router-dom";
import { Resource } from '../assets/resources'; // imports interface

interface ImageGridProps {
  resources: Resource[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ resources }) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5">
        {resources.map((resource, index) => (
          <Link to={`/${resource.slug}`} key={index}>
          <div
            className="block overflow-hidden aspect-w-1 aspect-h-1 max-w-96 max-h-96"
          >
            <img
              src={new URL(`${resource.thumb}`, import.meta.url).href}
              alt={resource.alt}
              className="object-cover w-full h-full"
            />
            <p>{resource.title}</p>
          </div>
          </Link>
        ))}
      </div>
  );
};

export default ImageGrid;