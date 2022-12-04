'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'components';
import { BsGithub } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const navbarLinks = [
  { name: 'Showcase', href: '/showcase' },
  { name: 'Docs', href: '/docs/getting-started' },
  { name: 'Blog', href: '/blog' },
  { name: 'Analytics', href: 'https://vercel.com/analytics' },
  { name: 'Templates', href: 'https://vercel.com/templates' },
  { name: 'Enterprise', href: 'https://vercel.com/contact/sales' },
];

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollPosition > 20 ? 'bg-white opacity-[85%] ' : 'bg-transparent'
      } transition-[background-color] duration-300`}
    >
      <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between  px-4 text-sm text-neutral-100 sm:text-base">
        <Image
          src="/nextjs-logo.svg"
          alt="next.js logo"
          width={90}
          height={90}
        />
        <ul className="ml-14 hidden items-center gap-7 md:flex">
          {navbarLinks.map(({ name, href }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="text-sm font-medium text-neutral-500 transition hover:text-black"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <div className="hidden lg:block">
            <Button intent="secondary">Feedback</Button>
          </div>
          <Button href="/learn/foundation">Learn</Button>
          <Link
            href="https://github.com/vercel/next.js"
            className="text-xl text-neutral-500 transition hover:text-[#68b5fb]"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};
