import ReactPlayer from 'react-player/vimeo'
import { ImageGrid } from './';
import { Resource } from '../assets/resources'; // imports interface

interface HomeProps {
  resources: Resource[];
}

export const Home: React.FC<HomeProps> = ({ resources }) => {
  return (
      <main>
        <h1>Demo Reel</h1>
       <ReactPlayer url='https://vimeo.com/714168862' controls />
      
      <ImageGrid resources={resources}/>
      </main>
  );
};
