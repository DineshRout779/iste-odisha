/* eslint-disable @next/next/no-img-element */
import { galleryData } from "@/utils/constants";
import ImageCarousel from "components/common/ImageCarousel";
import Navbar from "components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import ChairpersonPic from "public/images/chairperson.jpeg";
import Logo from "public/images/logo.png";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <ImageCarousel images={galleryData} />
            </div>

            <div className="p-4 bg-white rounded-lg shadow shadow-red-500 border-red-500 border-2 col-span-1">
              <div className="space-y-4">
                <div className="badge badge-error">Latest Notice</div>

                <h2 className="text-lg font-bold text-gray-800">
                  ISTE Convention Proposals
                </h2>
                <div className="flex items-center text-gray-600 text-sm">
                  <span>8th January, 2025</span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  Proposals are invited from ISTE Chapters of Engineering
                  Schools and Engineering Colleges of Odisha to organise Annual
                  ISTE Section Level Students Convention and Faculty Convention
                  for 2025.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                  <p className="text-sm font-medium">
                    Last date: 8th Feb, 2025
                  </p>
                </div>

                <div className="flex items-center justify-start pt-2">
                  <Link
                    href="/notice"
                    className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm font-medium transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-4">
            <div className="bg-gray-100 p-4 rounded-xl">
              <h2 className="text-2xl font-bold">About ISTE</h2>
              <p className="">
                The Indian Society for Technical Education (ISTE) is the leading
                National Professional non-profit making Society for the
                Technical Education System in our country with the motto of
                Career Development of Teachers and Personality Development of
                Students and overall development of our Technical Education
                System. Being the only national organisation of educators in the
                field of Engineering and Technology, ISTE effectively
                contributes in various missions of the Union Government. The
                strength of ISTE is the strong base it has in technical
                education institutions in the country.
              </p>
              <Image
                className="mx-auto mt-2"
                src={Logo}
                alt="iste logo"
                width="145"
                height="145"
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-xl">
              <div className="flex gap-4 md:gap-8 items-center">
                <Image
                  src={ChairpersonPic.src}
                  alt="Prof P K Parhi's photo"
                  className="h-20 md:h-36 w-auto object-cover rounded-md"
                  width={"100"}
                  height="100"
                />
                <div>
                  <h2 className="text-sm md:text-base font-bold">
                    Chairman, ISTE Odisha Section
                  </h2>
                  <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mt-4">
                    Prof P K Parhi
                  </h2>
                </div>
              </div>
              <p className="mt-4">
                Prof Pravat Kumar Parhi, Professor, Civil Engineering
                Department, OUTR Bhubaneswar and former Principal, IMIT Cuttack
                is continuing in the academic profession since 1989. He obtained
                his Ph D degree from IIT Kharagpur in the specialization of
                Structural Engineering in 2001 and his area of interest are
                Composite Structures, Structural Dynamics, FEM Analysis of
                Structures, advances in Concrete Technology, etc. He has
                published more than 40 research papers in many reputed national
                and international journals and he has also received some state
                level and national level awards for his innovative research.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
