import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import backgroundImage from '../../../../public/hero-background.avif';

export const Hero = () => {
  return (
    <div className={styles.heroBackground}>
      <div className="flex items-center justify-center">
        <Image
          src={backgroundImage}
          alt="hero background"
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
      </div>
    </div>
  );
};
