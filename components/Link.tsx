import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

interface NextProps {
  as?: string;
  href: any;
  className?: string;
}

interface LinkProps {
  href?: any;
  activeClassName?: string;
  className?: string;
  innerRef: React.Ref<HTMLInputElement>;
  naked?: boolean;
}

interface Props {}

const NextComposed = React.forwardRef<HTMLInputElement, NextProps>(
  function NextComposed(props, ref) {
    const { as, href, ...other } = props;

    return (
      <NextLink href={href} as={as}>
        <a ref={ref} {...other} />
      </NextLink>
    );
  }
);

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link: React.FC<LinkProps> = (props) => {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  });

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  );
};

export default React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Link {...props} innerRef={ref} />
));
