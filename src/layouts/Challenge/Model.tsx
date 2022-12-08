import { useModalContext } from '../../contexts/modalContext';

export const Modal = () => {
  const { open } = useModalContext();

  return (
    <div className="fixed inset-0 w-full h-full bg-black/70" onClick={open}>
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-gray-800 max-w-4xl w-full max-h-[650px] h-full rounded-lg p-8">
          <h1>conteudo</h1>
        </div>
      </div>
    </div>
  );
};
