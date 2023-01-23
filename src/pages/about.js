import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const About = () => {
  return (
    <main className={inter.className}>
      <div className='container mx-auto max-w-[1200px] flex items-center gap-8 px-4 py-4'>
        <Image
          src='/images/logo.png' // Route of the image file
          height={80} // Desired size with correct aspect ratio
          width={80} // Desired size with correct aspect ratio
          alt='Your Name'
        />

        <h1 className='text-xl font-bold'>
          INDIAN SOCIETY FOR TECHNICAL EDUCATION
        </h1>
      </div>

      <div className='navbar px-4 space-x-4 mx-auto max-w-[1200px] bg-base-100'>
        <Link href='/' className={styles.linkActive}>
          Home
        </Link>
        <Link href='/about' className={styles.link}>
          About
        </Link>
      </div>
    </main>
  );
};
export default About;
