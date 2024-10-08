import ReactPlayer from 'react-player/vimeo'
import { ImageGrid } from './';

export const Home = () => {
  return (
      <div className='main'>
        <h1>Demo Reel</h1>
       <ReactPlayer url='https://vimeo.com/714168862' controls light />
      
      <ImageGrid />
      </div>
  );
};
