import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Challenges } from './Challenges';

export type UserProps = {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  token: string;
};

export const Home = () => {
  return (
    <div className="container m-auto flex flex-col md:flex-row w-full bg-background mt-28">
      <Header />
      <Sidebar />
      <main className="flex items-center justify-center w-full px-4 md:px-20 ">
        <Challenges />
      </main>
    </div>
  );
};
