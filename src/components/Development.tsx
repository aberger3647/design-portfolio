import Iframe from "react-iframe";
import { DevResource } from "../assets/devresources";

interface DevelopmentProps {
  devresources: DevResource[];
}

export const Development: React.FC<DevelopmentProps> = ({ devresources }) => {
  return (
    <main>
        {devresources.map((resource, index) => (
          <>
            <h2 className="my-4 text-2xl text-center">{resource.title}</h2>
            <p className="text-center sm:w-1/2">{resource.description}</p>
            <p className="text-sm text-center sm:w-1/2">Tech Stack: {resource.stack}</p>
            <a className='block text-center text-lime-400 hover:text-lime-500' href={resource.github} target="_blank">
              GitHub Repository
            </a>
                        <a className='block text-center text-lime-400 hover:text-lime-500' href={resource.link} target="_blank">
              Live Site
            </a>
            <div className="w-full sm:w-9/12">
              <div className="relative top-0 left-0 w-full h-full pt-3 mb-8 aspect-video">
                <Iframe
                  url={resource.video}
                  className="w-full h-full"
                  allow="autoplay; fullscreen;"
                ></Iframe>
              </div>
            </div>
            {index !== devresources.length - 1 && <hr className='w-full my-8 border-gray-300 border-1'/>}
          </>
        ))}
    </main>
  );
};
