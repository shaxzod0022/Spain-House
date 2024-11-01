import React, { FC } from "react";
interface props {
  title: string;
  onClick?: () => void;
  newClass?: string;
}
const Button: FC<props> = ({ title, onClick, newClass }) => {
  return (
    <button
      onClick={onClick}
      className={`${newClass} font-PlayFair font-semibold leading-6 bg-btnBg rounded-sm text-white sm:px-8 px-4 sm:py-2 py-1.5 hover:bg-slate-500`}
    >
      {title}
    </button>
  );
};

export default Button;
