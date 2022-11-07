type VerifyButtonProps = {
  incrementBar: () => void;
}

export const VerifyButton = ({incrementBar}: VerifyButtonProps) => {
  return (
    <button
      className="p-4 w-40 border border-purple-700 bg-purple-1000/40 text-lg font-bold rounded-lg"
      onClick={incrementBar}
    >
      Verificar
    </button>
  );
};
