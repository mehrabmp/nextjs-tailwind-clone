import Link from 'next/link';

const features = [
  {
    title: 'Image Optimization',
    body: '<Image> and Automatic Image Optimization with instant builds.',
  },
  {
    title: 'Internationalization',
    body: 'Built-in Domain & Subdomain Routing and Automatic Language detection.',
  },
  {
    title: 'Next.js Analytics',
    body: 'A true lighthouse score based on real visitor data & page-by-page insights',
  },
  {
    title: 'Zero Config',
    body: 'Automatic compilation and bundling. Optimized for production from the start.',
  },
  {
    title: 'Hybrid: SSG and SSR',
    body: 'Pre-render pages at build time (SSG) or request time (SSR) in a single project.',
  },
  {
    title: 'Incremental Static Regeneration',
    body: 'Add and update statically pre-rendered pages incrementally after build time.',
  },
  {
    title: 'TypeScript Support',
    body: 'Automatic TypeScript configuration and compilation.',
  },
  {
    title: 'Fast Refresh',
    body: 'Fast, reliable live-editing experience, as proven at Facebook scale.',
  },
  {
    title: 'File-system Routing',
    body: 'Every component in the `pages` directory becomes a route.',
  },
  {
    title: 'API Routes',
    body: 'Optionally create API endpoints to provide backend functionality.',
  },
  {
    title: 'Built-in CSS Support',
    body: 'Create component-level styles with CSS modules. Built-in Sass support.',
  },
  {
    title: 'Middleware',
    body: 'Dynamic routing defined by code instead of configuration.',
  },
];

export const Features = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 text-center">
      <h2 className="text-3xl font-bold leading-[1.3] tracking-[-1px] text-black">
        The Web SDK
      </h2>
      <h3 className="py-4 text-neutral-500">
        Next.js has all the tools you need to make the Web. Faster.
      </h3>
      <div className="mt-7 grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, body }, index) => (
          <div
            key={index}
            className="group cursor-pointer rounded-md border border-solid border-neutral-200 bg-white p-6 transition hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,.12)]"
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="my-4 text-sm leading-[1.65] text-neutral-900">
              {body}
            </p>
            <Link
              href="/"
              className="text-sm text-primary group-hover:underline"
            >
              Documentation &rarr;
            </Link>
          </div>
        ))}
      </div>
      <div className="my-5 rounded-md border border-solid border-neutral-200 bg-white p-6 text-left md:border-none md:text-center">
        <h3 className="text-lg font-semibold md:hidden">And More.</h3>
        <p className="my-4 text-sm">
          <strong className="hidden md:inline-block">And More: &nbsp;</strong>
          Support for{' '}
          <Link href="/" className="text-sm text-primary hover:underline">
            enviornment variables
          </Link>
          ,{' '}
          <Link href="/" className="text-sm text-primary hover:underline">
            preview mode
          </Link>
          ,{' '}
          <Link href="/" className="text-sm text-primary hover:underline">
            custom `head` tags
          </Link>
          ,{' '}
          <Link href="/" className="text-sm text-primary hover:underline">
            automatic polyfills
          </Link>
          , and more.
        </p>
      </div>
    </div>
  );
};
