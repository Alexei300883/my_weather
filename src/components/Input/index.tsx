import React from "react";

type InputPropsType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type: string;
  title: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { value, setValue, placeholder, type, title } = props;
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ fontSize: "24px", display: "flex", flexDirection: "column" }}>
      <span>{title}</span>
      <input
        placeholder={placeholder}
        type={type}
        onChange={changeHandler}
        style={{ fontSize: "24px", marginBottom: "20px" }}
        value={value}
        required={type === "password"}
      />
    </div>
  );
};

export default Input;
