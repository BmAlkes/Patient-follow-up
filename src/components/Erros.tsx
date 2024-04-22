import { ReactNode } from "react";

const Erros = ({ children }: { children: ReactNode }) => {
  return (
    <p className=" text-center bg-red-600 text-white font-semibold uppercase text-sm rounded-md p-1">
      {children}
    </p>
  );
};

export default Erros;
