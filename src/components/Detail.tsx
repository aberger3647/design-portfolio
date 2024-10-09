import { Resource } from '../assets/resources'; // imports interface
import ReactPlayer from 'react-player/vimeo'

interface ImageGridProps {
  resource: Resource;
}

export const Detail: React.FC<ImageGridProps> = ({ resource }) => {
  return (
    <main>
      <h1>{resource.title}</h1>
      <p className='sm:w-1/2 my-4'>{resource.description}</p>
      {resource.links.map((link) =>  <ReactPlayer className='my-4' url={link} controls />)}
    </main>
  );
};
