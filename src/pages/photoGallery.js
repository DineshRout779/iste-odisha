import Navbar from "components/navbar/Navbar";
import Image from "next/image";
import GalleryPic1 from "public/gallery/GalleryPic1.jpg";
import GalleryPic2 from "public/gallery/GalleryPic2.jpg";
import GalleryPic3 from "public/gallery/GalleryPic3.jpg";
import GalleryPic4 from "public/gallery/GalleryPic4.jpg";
import GalleryPic5 from "public/gallery/GalleryPic5.jpg";
import GalleryPic6 from "public/gallery/GalleryPic6.jpg";
import GalleryPic7 from "public/gallery/GalleryPic7.jpg";
import GalleryPic8 from "public/gallery/GalleryPic8.jpg";
import GalleryPic9 from "public/gallery/GalleryPic9.jpg";
import GalleryPic10 from "public/gallery/GalleryPic10.jpg";
import GalleryPic11 from "public/gallery/GalleryPic11.jpg";
import GalleryPic12 from "public/gallery/GalleryPic12.jpg";
import GalleryPic13 from "public/gallery/GalleryPic13.jpg";
import GalleryPic14 from "public/gallery/GalleryPic14.jpg";
import GalleryPic15 from "public/gallery/GalleryPic15.jpg";
import GalleryPic16 from "public/gallery/GalleryPic16.jpg";
import GalleryPic17 from "public/gallery/GalleryPic17.jpg";

const galleryData = [
  GalleryPic1,
  GalleryPic2,
  GalleryPic3,
  GalleryPic4,
  GalleryPic5,
  GalleryPic6,
  GalleryPic7,
  GalleryPic8,
  GalleryPic9,
  GalleryPic10,
  GalleryPic11,
  GalleryPic12,
  GalleryPic13,
  GalleryPic14,
  GalleryPic15,
  GalleryPic16,
  GalleryPic17,
];

const PhotoGallery = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
        <h2 className="py-4 underline underline-offset-8 text-4xl text-center font-bold">ISTE Odisha Photo Gallery</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item) => (
            <Image
              key={item.src}
              alt="ISTE Conference"
              src={item.src}
              width={200}
              height={200}
              className="h-60 w-full rounded-xl object-cover"
              unoptimized={true} 
              placeholder="blur"
              blurDataURL={item.blurDataURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PhotoGallery;
