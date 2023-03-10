/* eslint-disable @next/next/no-img-element */
import Navbar from "components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import ChairpersonPic from "public/images/chairperson.jpeg";
import HeroBanner from "public/images/hero-banner.jpg";
import Logo from "public/images/logo.png";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container mx-auto max-w-[1200px] py-2 w-[95%]">
          <Image
            src={HeroBanner.src}
            alt="Conference photo by Wan San Yip"
            className="h-[360px] w-full object-cover rounded-md"
            width={"1000"}
            height="360"
          />
          <div className="bg-amber-100 p-2 rounded-md border-l-8 border-orange-500 my-4">
            Proposals are invited from ISTE Chapters of Engineering Schools and
            Engineering Colleges of Odisha to organise Annual ISTE Section Level
            Students Convention and Annual ISTE Section Level Faculty Convention
            for the year : 2022-23.{" "}
            <Link href="/notice" className="font-bold underline underline-offset-4">Read More...</Link>
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
