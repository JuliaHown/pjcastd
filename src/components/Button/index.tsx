import React from "react";
import style from "./Button.module.scss";

type Buttonprops = {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<Buttonprops> = ({ texto, type = "button" }) => {
  return (
    <button className={style.btn} type={type}>
      {texto}
    </button>
  );
};

export default Button;
