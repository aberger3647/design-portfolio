import headshot from "../assets/headshotsmall.jpg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <main>
      <div className="flex sm:flex-row flex-col">
      <div className="max-w-96 sm:mr-4 mb-4">
          <img src={new URL(`${headshot}`, import.meta.url).href} alt="Black and white headshot of Alex" />
        </div>

        <div className="max-w-96">
          <p>
            Hello! I am an animator, illustrator, graphic designer, video
            editor, and web designer & developer based in Austin, Texas.
          </p>
          <br />
          <p>
            I earned a BFA in Communication Design with a minor in Writing from
            Washington University in St. Louis, as well as a Full Stack coding
            certificate from the University of Texas at Austin.
          </p>
          <br />
          <p>As a designer, I use Adobe Illustrator, Photoshop, After Effects, XD and Figma to create social media content, videos, assets, motion graphics templates, websites and user interfaces.</p>
          <br />
          <p>As a developer, I use React, Express, Node, MongoDB, JavaScript, TypeScript, MySQL and many other frameworks/libraries to transform my designs into fully-functioning full-stack applications.</p>
          <br />
          <p>
            When I'm not finessing the graph editor or coding, I am <a href='https://www.bigalstrength.com/' target='_blank' className='text-lime-400 hover:text-lime-500'>training
            myself and others at the gym</a>.
          </p>
          <br />
          <p>Contact: aberger3647@gmail.com</p>
          <br />
          <a href='https://www.linkedin.com/in/alexjberger/' target='_blank' className='block w-fit text-lime-400 hover:text-lime-500'>LinkedIn</a>
          <a href='https://github.com/aberger3647/' target='_blank' className='block w-fit text-lime-400 hover:text-lime-500'>GitHub</a>
          <Link to='/resume' className='block w-fit text-lime-400 hover:text-lime-500'>Resume</Link>
        </div>
      </div>
    </main>
  );
};
