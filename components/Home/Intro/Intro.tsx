import Link from 'next/link';

export const Intro = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-20 text-center">
      <h1 className="text-5xl font-extrabold leading-[1.2] tracking-tighter text-black md:text-7xl md:leading-[1.1] lg:text-8xl lg:leading-[1]">
        The React Framework for Production
      </h1>
      <h2 className="py-10 font-normal leading-[1.6] tracking-tight text-neutral-500 lg:text-xl">
        Next.js gives you the best developer experience with all the features
        you need for production: hybrid static & server rendering, TypeScript
        support, smart bundling, route pre-fetching, and more. No config needed.
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <Link
          href="/learn"
          className="rounded bg-primary py-3 px-14 text-white shadow-[0_4px_14px_0_rgba(0,118,255,0.4)] transition hover:shadow-[0_6px_20px_0_rgba(0,118,255,0.23)]"
        >
          Start Learning
        </Link>
        <Link
          href="/learn"
          className="rounded bg-white py-3 px-14 text-neutral-500 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)] transition hover:shadow-[0_6px_20px_0_rgba(93,93,93,0.23)]"
        >
          Documentation
        </Link>
      </div>
      <div className="my-10 flex items-center justify-center gap-5 font-medium">
        <Link href="/" className="text-neutral-500">
          License: MIT
        </Link>
        <Link
          href="/github"
          className="rounded px-2 py-1 text-primary transition hover:bg-[rgba(0,118,255,0.1)]"
        >
          Github
        </Link>
      </div>
    </div>
  );
};
