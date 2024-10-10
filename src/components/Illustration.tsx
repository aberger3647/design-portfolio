import Masonry from "react-masonry-css";

export const Illustration = () => {
  const images = [
    "wandering-earth.jpg",
    "spano-farbers.png",
    "aloe.jpg",
    "braingoggles.png",
    "cactus.jpg",
    "car.jpg",
    "delirium_matryoshka.jpg",
    "delirium_monkey.jpg",
    "delirium_trolldoll.jpg",
    "delirium_unicorn.jpg",
    "turingtalk.jpg",
    "george.jpg",
    "gina.jpg",
    "guy.png",
    // 'industry_aerospace.gif',
    // 'industry_cybersecurity.gif',
    // 'industry_oilandgas.gif',
    "lonestar_fireship.jpg",
    "lonestar_texas-shuttle.jpg",
    "model-driven-enterprise1.png",
    "model-driven-enterprise2.png",
    "model-driven-enterprise3.png",
    "model-driven-enterprise4.png",
    "equus.png",
    "oscar.png",
    "salad.jpg",
    "percy.jpg",
    "reindeer.jpg",
    "thom.jpg",
    "alexis.jpg",
  ];
  const breakpoints = {
    default: 3,
    1200: 2,
    800: 1,
  };
  return (
    <main>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <img src={`src/assets/illustration/${image}`} key={image} />
        ))}
      </Masonry>
    </main>
  );
};
