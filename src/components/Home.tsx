import Iframe from "react-iframe";
import { ImageGrid } from './';
import { Resource } from '../assets/resources'; // imports interface

interface HomeProps {
  resources: Resource[];
}

export const Home: React.FC<HomeProps> = ({ resources }) => {
  return (
      <main>
        <h1>Demo Reel</h1>

       <div className="sm:w-11/12 w-full">
        <div className="relative pt-3 aspect-video absoulute top-0 left-0 w-full h-full">
          <Iframe
            url='https://player.vimeo.com/video/714168862'
            className="w-full h-full"
            allow="autoplay; fullscreen;"
          ></Iframe>
        </div>
      </div>
      
      <ImageGrid resources={resources}/>
      </main>
  );
};
