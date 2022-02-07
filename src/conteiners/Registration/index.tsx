import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/index";
import { userRegistrationAction } from "../../store/RegistrStore/actions";
import { getUserData } from "../../store/RegistrStore/selector";
import styles from "../../components/Header/Header.module.scss";

const Registration: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const userData = useSelector(getUserData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.firstName && userData.lastName) {
      navigate("/");
    }
  }, [userData.firstName, userData.lastName]);

  const handler = () => {
    if (repeatPassword === password) {
      setTimeout(
        () => dispatch(userRegistrationAction({ lastName, firstName })),
        3000
      );
    } else {
      console.log("Пароли не совпадают");
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };
  return (
    <div>
      <Input
        value={firstName}
        setValue={setFirstName}
        placeholder="Введите имя"
        type="text"
        title="User First Name"
      />
      <Input
        value={lastName}
        setValue={setLastName}
        placeholder="Введите фамилию"
        type="text"
        title="User Last Name"
      />
      <Input
        value={email}
        setValue={setEmail}
        placeholder="Введите почту"
        type="email"
        title="User email"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль"
        type="password"
        title="User password"
      />
      <Input
        value={repeatPassword}
        setValue={setRepeatPassword}
        placeholder="Повторите пароль"
        type="password"
        title="User repeat password"
      />
      <button className={styles.btn} onClick={handler} type="submit">
        <span>PUSH ME</span>
      </button>
      <button className={styles.btn} onClick={clearForm} type="button">
        <span>CLEAR FORM</span>
      </button>
    </div>
  );
};

export default Registration;
