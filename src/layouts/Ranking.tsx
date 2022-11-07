import { Sidebar } from '../components/Sidebar';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const Ranking = () => {
  const TAGS = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  return (
    <div className="container m-auto flex flex-col md:flex-row w-full bg-background mt-28">
      <Sidebar />

      <main className="flex flex-col items-center justify-center w-full px-4 md:px-48 ">
        <h1>Ranking</h1>

        <div className="grid grid-cols-2 gap-12">
          <div className="w-full">
            <div className=" bg-gray-900 max-w-md w-full max-h-[370px] m-auto lg:m-0 h-full rounded-xl p-6">
              <h1 className='text-2xl font-semibold'>Progresso XP</h1>
            </div>
          </div>

          <div className="group w-full ">
            <div className="scroll-table bg-gray-900 max-w-md w-full max-h-[500px] m-auto lg:m-0 h-full rounded-xl overflow-auto">
              <div className="py-6 px-2 border-b-2 border-gray-600">
                <div className="flex items-center justify-between px-4">
                  <h1 className="text-2xl font-semibold">Ranking</h1>
                  <span className="text-gray-400 font-semibold text-xl">
                    5 dias
                  </span>
                </div>
              </div>

              {TAGS.map((tag, key: number) => (
                <div key={tag} className="flex items-center mt-2 gap-5 p-4">
                  <span className="text-xl">{key + 1}</span>
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />

                  <strong className="text-md w-full">
                    Fulano de Tal da Silva
                  </strong>
                  <span className="w-32 text-right">XP 243</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
