import NextLink from 'next/link';
import { ReactNode } from 'react';

type LinkProps = {
  children: ReactNode;
  href: string;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
}
