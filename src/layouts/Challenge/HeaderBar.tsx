import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Link } from 'react-router-dom';

const HeaderBarBase: ForwardRefRenderFunction<HTMLDivElement> = (
  { ...rest },
  ref
) => {
  return (
    <header className="flex items-center gap-5 mt-10">
      <Link to={'/home'}>
        <i className="fa-solid fa-x text-xl cursor-pointer"></i>
      </Link>
      <div ref={ref} className="w-full h-3 rounded-full bg-gray-800" {...rest}>
        <div className="w-0 h-3 rounded-full bg-purple-700" />
      </div>
    </header>
  );
};

export const HeaderBar = forwardRef(HeaderBarBase);
