import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../services/firebaseConfig';

type UserProps = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
};

const provider = new GoogleAuthProvider();

export const Login = () => {
  const [inputs, setInputs] = useState({} as UserProps);

  const auth = getAuth(app);

  const navigate = useNavigate();

  const sigInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
          const { displayName, email, uid, photoURL } = result.user;

          console.log(result);

          localStorage.setItem(
            'react.auth.user',
            JSON.stringify({
              uid,
              displayName,
              email,
              photoURL,
              token,
            })
          );
          window.location.href = 'http://localhost:5173/home';
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="flex h-screen w-full">
      <div className="hidden lg:flex justify-center items-center bg-purple-1000 w-full">
        <picture>
          <img src="background-login.png" alt="" className="max-w-auto" />
        </picture>
      </div>
      <div className="md:max-w-[920px] md:min-w-[800px] px-8">
        <div className="container m-auto w-full h-full flex flex-col items-center justify-center ">
          <img
            src="mascote.png"
            alt=""
            className="mb-5 min-w-[80px] max-w-[100px] w-auto"
          />
          <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-heading font-bold max-w-[530px] w-full md:text-left md:leading-relaxed lg:leading-normal">
            Faça seu login na plataforma
          </h1>

          <section className="flex items-center justify-center mt-20 w-full">
            <button
              className="flex items-center justify-center gap-5 bg-gray-50 hover:bg-gray-200 text-blue-700 py-4 px-6 rounded-lg max-w-[530px] w-full text-lg transition"
              onClick={sigInGoogle}
            >
              <img src="google-img.png" alt="" className="w-8" /> Google
            </button>
          </section>

          <p className="mt-14 text-center max-w-[750px] font-semibold font-serif">
            Ao entrar no StackoverflowGame, você concorda com os nossos{' '}
            <span className="text-purple-500">Termos</span> e{' '}
            <span className="text-purple-500">Política de Privacidade</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
