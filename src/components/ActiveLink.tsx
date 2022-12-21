import { cloneElement, ReactElement } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  icon?: string;
};

export const ActiveLink = ({ children, icon, ...rest }: ActiveLinkProps) => {
  const { pathname } = useLocation();

  const className = pathname === rest.to ? 'text-purple-600 font-semibold' : '';

  return (
    <div className={className ? className : 'text-gray-500'}>
      <Link
        {...rest}
        className="flex flex-col md:flex-row  items-center md:items-end gap-2 md:gap-3 leading-5 hover:brightness-90"
      >
        <i className={`${icon} text-md md:text-3xl`}></i>
        {cloneElement(children, {})}
      </Link>
    </div>
  );
};
