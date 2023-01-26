/* eslint-disable @next/next/no-img-element */
import Navbar from 'components/navbar/Navbar';
import Image from 'next/image';
import HeroBanner from 'public/images/hero-banner.jpg';
import ChairpersonPic from 'public/images/chairperson.jpeg';
import Logo from 'public/images/logo.png';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className='container mx-auto max-w-[1200px] py-2 w-[95%]'>
          <Image
            src={HeroBanner.src}
            alt='hero banner'
            className='h-[360px] w-full object-cover rounded-md'
            width={'1000'}
            height='360'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 my-4'>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <h2 className='text-2xl font-bold'>About Us</h2>
              <p className=''>
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
                className='mx-auto mt-2'
                src={Logo}
                alt='iste logo'
                width='145'
                height='145'
              />
            </div>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <div className='flex gap-4 md:gap-8 items-center'>
                <Image
                  src={ChairpersonPic.src}
                  alt="Prof P K Parhi's photo"
                  className='h-20 md:h-36 w-auto object-cover rounded-md'
                  width={'100'}
                  height='100'
                />
                <div>
                  <h2 className='text-sm font-bold'>Chairperson</h2>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mt-4'>
                    Prof P K Parhi
                  </h2>
                </div>
              </div>
              <p className='mt-4'>
                Prof Pravat Kumar Parhi, Professor, Civil Engg Department of CET
                Bhubaneswar and Principal, IMIT Cuttack is continuing in the
                academic profession since 1989. He obtained his Ph D degree from
                IIT Kharagpur in the specialization of Structural Engineering in
                2001 and his area of interest are Composite Structures,
                Structural Dynamics, FEM Analysis of Structures, advances in
                Concrete Technology, etc. He has published more than 40 research
                papers in many reputed national and international journals and
                he has also received some state level and national level awards
                for his innovative research.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
