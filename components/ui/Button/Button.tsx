import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import Link from 'next/link';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-1.5 border border-solid border-transparent rounded font-medium text-sm transition',
  {
    variants: {
      intent: {
        primary:
          'bg-primary text-white hover:border-primary hover:bg-white hover:text-primary',
        secondary: 'bg-white text-[#666] border-[#eaeaea] hover:border-[#666]',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export function Button({ href, intent, fullWidth, children, ...props }: Props) {
  const isLink = typeof href !== 'undefined';
  const classNames = buttonStyles({ intent, fullWidth });

  if (isLink) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
