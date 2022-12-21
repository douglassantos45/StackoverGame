import { ButtonHTMLAttributes, useEffect, useState } from 'react';

type VerifyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  incrementBar: () => void;
};

export const VerifyButton = ({ incrementBar, ...rest }: VerifyButtonProps) => {

  return (
    <button
      className="p-4 w-40 border border-purple-700 bg-purple-1000/40 text-lg font-bold rounded-lg"
      onClick={incrementBar}
      {...rest}
    >
      Verificar
    </button>
  );
};
