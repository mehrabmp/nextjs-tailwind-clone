import Image from 'next/image';
import Link from 'next/link';

export const TopBar = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto flex h-[50px] w-full max-w-5xl items-center justify-between px-4 text-sm text-neutral-100 sm:text-base">
        <Link href="/">
          <Image src="/vercel.svg" alt="Vercel Logo" width={88} height={88} />
        </Link>
        <Link href="/">
          <p>
            Deploy <strong>Next.js</strong> on Vercel{' '}
            <span className="text-xs">&rarr;</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
