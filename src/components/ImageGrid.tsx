export const ImageGrid = () => {
  const images = Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    src: `/api/placeholder/300/300`,
    alt: `Placeholder ${index + 1}`,
    link: `https://example.com/image/${index + 1}`
  }));

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <a
            key={image.id}
            href={image.link}
            className="block aspect-square overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;