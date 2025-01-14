import Navbar from "components/navbar/Navbar";
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const galleryData = [
  "gallery/GalleryPic1.jpg",
  "gallery/GalleryPic2.jpg",
  "gallery/GalleryPic3.jpg",
  "gallery/GalleryPic4.jpg",
  "gallery/GalleryPic5.jpg",
  "gallery/GalleryPic6.jpg",
  "gallery/GalleryPic7.jpg",
  "gallery/GalleryPic8.jpg",
  "gallery/GalleryPic9.jpg",
  "gallery/GalleryPic10.jpg",
  "gallery/GalleryPic11.jpg",
  "gallery/GalleryPic12.jpg",
  "gallery/GalleryPic13.jpg",
  "gallery/GalleryPic14.jpg",
  "gallery/GalleryPic15.jpg",
  "gallery/GalleryPic16.jpg",
  "gallery/GalleryPic17.jpg",
  "gallery/GalleryPic18.jpg",
  "gallery/GalleryPic19.jpg",
  "gallery/GalleryPic20.jpg",
  "gallery/GalleryPic21.jpg",
  "gallery/GalleryPic22.jpg",
  "gallery/GalleryPic23.jpg",
  "gallery/GalleryPic24.jpg",
  "gallery/GalleryPic25.jpg",
  "gallery/GalleryPic26.jpg",
  "gallery/GalleryPic27.jpg",
];

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
        <h2 className="py-4 underline underline-offset-8 text-4xl text-center font-bold">
          ISTE Odisha Photo Gallery
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData?.map((item, index) => (
            <Image
              key={index}
              alt="ISTE Conference"
              src={item}
              width={200}
              height={200}
              className="h-60 w-full rounded-xl object-cover cursor-pointer"
              unoptimized={true}
              //   placeholder="blur"
              //   blurDataURL={item.blurDataURL}
              onClick={() => openImageViewer(index)}
            />
          ))}
        </div>

        {isViewerOpen && (
          <ImageViewer
            src={galleryData}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
};
export default PhotoGallery;
