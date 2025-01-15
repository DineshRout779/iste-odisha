import Image from "next/image";
import { useEffect, useState } from "react";

const ImageCarousel = ({ images = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        current === images.length - 1 ? 0 : current + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null;

  return (
    <div className="w-full relative overflow-hidden rounded-lg shadow">
      {/* Container with relative positioning */}
      <div className="relative w-full h-96 md:h-[28rem]rounded">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={`/${src}`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              width={500}
              height={200}
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
