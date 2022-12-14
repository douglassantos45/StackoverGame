import * as UIDropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';
import { UserProps } from '../layouts/Home';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [user, setUser] = useState({} as UserProps);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem('react.auth.user') as any
    ) as UserProps;
    setUser(user);
  }, []);

  const navigate = useNavigate();

  return (
    <header className="py-4 mb-16 w-full h-20 bg-background px-4 fixed inset-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="mascote.png" alt="" className="max-w-[40px] w-full" />
          <h1 className="font-semibold text-purple-600 lg:text-xl">
            StackOverGame
          </h1>
        </div>
        <UIDropdownMenu.Root>
          <UIDropdownMenu.Trigger className=" cursor-pointer outline-0">
            <img
              src={user.photoURL}
              alt=""
              className="max-w-[40px] rounded-full"
              referrerPolicy="no-referrer"
            />
          </UIDropdownMenu.Trigger>

          <UIDropdownMenu.Content
            className="bg-gray-800 w-[130px] mt-2 rounded-md text-left cursor-pointer py-4 flex flex-col gap-2 transition-all durat
n-300 mr-1"
          >
            {/*             <UIDropdownMenu.Item className="text-gray-300 hover:text-gray-400 outline-0 transition py-1 pl-3">
              <i className="fa-solid fa-gear mr-2 text-gray-400"></i>Conta
            </UIDropdownMenu.Item> */}
            <UIDropdownMenu.Item className="text-gray-300 hover:text-gray-400 outline-0 transition py-1 pl-3">
              <button
                onClick={() => {
                  localStorage.removeItem('react.auth.user');
                  navigate('/');
                }}
              >
                <i className="fa-solid fa-arrow-right-from-bracket mr-2 text-gray-400"></i>
                Sair
              </button>
            </UIDropdownMenu.Item>
          </UIDropdownMenu.Content>
        </UIDropdownMenu.Root>
      </div>
    </header>
  );
};
