import { ActiveLink } from './ActiveLink';

export const Sidebar = () => {
  return (
    <div className='z-20'>
      <nav className="hidden md:block max-w-[284px] w-full bg-background">
        <ul className="flex flex-col items-start gap-5 text-lg">
          <li className="ml-2">
            <ActiveLink to="/home" icon="fa-solid fa-award">
              <span className="ml-2">Desafios</span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/ranking" icon="fa-solid fa-ranking-star">
              <span className="">Ranking</span>
            </ActiveLink>
          </li>
        </ul>
      </nav>

      <nav className="flex md:hidden max-w-[320px] fixed bottom-5 left-1/2 -translate-x-1/2 w-full bg-gray-900 rounded-xl shadow-white-2xl">
        <ul className="flex w-full items-center justify-around p-4 text-md">
          <li>
            <ActiveLink to="/" icon="fa-solid fa-award">
              <span>Desafios</span>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="/ranking" icon="fa-solid fa-ranking-star">
              <span>Ranking</span>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
