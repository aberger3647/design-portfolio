import Iframe from "react-iframe";
import { DevResource } from "../assets/devresources";

interface DevelopmentProps {
  devresources: DevResource[];
}

export const Development: React.FC<DevelopmentProps> = ({ devresources }) => {
  return (
    <main>
        {devresources.map((resource) => (
          <>
            <h2 className="text-center text-3xl">{resource.title}</h2>
            <p className="sm:w-1/2 my-4 text-center">{resource.description}</p>
            <a className='block text-center' href={resource.github} target="_blank">
              GitHub Repository
            </a>
            <div className="sm:w-9/12 w-full">
              <div className="relative pt-3 aspect-video top-0 left-0 w-full h-full mb-8">
                <Iframe
                  url={resource.video}
                  className="w-full h-full"
                  allow="autoplay; fullscreen;"
                ></Iframe>
              </div>
            </div>
          </>
        ))}
    </main>
  );
};
