import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { BsArrowRight } from 'react-icons/bs';

export const Hero = () => {
  return (
    <div className={styles.heroBackground}>
      <div className="relative mb-5 flex flex-col items-center justify-center">
        <Image
          src="/hero-background.avif"
          alt="hero background"
          width={900}
          height={900}
          className={styles.heroImage}
        />
        <div className="z-20 mt-[370px] px-8 text-center">
          <div className="flex items-center justify-center">
            <Image
              src="/nextjs-conf.svg"
              alt="nextjs conf logo"
              width={200}
              height={200}
            />
          </div>
          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-[-3px] text-neutral-900 md:text-6xl lg:text-[90px] ">
            Dynamic without limits
          </h1>
          <p className="mt-3 font-grotesk text-xl font-normal text-neutral-600">
            Every announcement from the 2022 edition of{' '}
            <strong className="text-neutral-700">Next.js Conf.</strong>
          </p>
        </div>
        <div className={styles.heroFade}></div>
        <div className="z-30 mt-10 flex flex-wrap items-center justify-center gap-6 px-10">
          <Link
            href="https://vercel.com/templates/next.js/nextjs-boilerplate"
            className="flex items-center justify-center gap-3 rounded-full bg-black px-5 py-3 font-grotesk font-medium text-white"
          >
            <svg
              aria-label="Vercel Logo"
              fill="currentColor"
              viewBox="0 0 75 65"
              height="15.600000000000001"
              width="18"
            >
              <path d="M37.59.25l36.95 64H.64l36.95-64z" />
            </svg>
            Start Deploying
          </Link>
          <Link
            href="/conf"
            className="flex items-center justify-center gap-3 rounded-full border border-solid border-neutral-800 bg-white px-5 py-3 font-grotesk font-medium text-black"
          >
            Replay The Event
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
