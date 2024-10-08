import headshot from "../assets/headshotsmall.jpg";

export const About = () => {
  return (
    <div className="main">
      <div className="flex sm:flex-row flex-col">
      <div className="max-w-96 sm:mr-4 mb-4">
          <img src={headshot} alt="Black and white headshot of Alex" />
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
            When I'm not finessing the graph editor or coding, I am <a href='https://www.bigalstrength.com/' target='_blank'>training
            myself and others at the gym</a>.
          </p>
          <br />
          <p>Contact: aberger3647@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
