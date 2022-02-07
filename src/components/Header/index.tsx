import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.png";
import style from "./Header.module.scss";
import { getUserData } from "../../store/RegistrStore/selector";
import { userLogoutAction } from "../../store/RegistrStore/actions";

const Header: React.FC = () => {
  const dispath = useDispatch();
  const userData = useSelector(getUserData);
  const logoutHandler = () => {
    dispath(userLogoutAction());
  };
  return (
    <header className={style["wrapper-example"]}>
      <Link to="/">
        <div className={style.logo}>
          <img src={logo} alt="logotype" />
        </div>
      </Link>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <Link to="/">Главная страница</Link>
          </li>
          <li>
            <Link to="/registration">Регистрация</Link>
          </li>
          <li>
            <Link to="/info">О авторе</Link>
          </li>
          <li>
            <Link to="/weather">Погода по городу</Link>
          </li>
        </ul>
      </nav>
      {userData.firstName && userData.lastName ? (
        <div>
          <p>{userData.firstName}</p>
          <p>{userData.lastName}</p>
          <button type="button" onClick={logoutHandler} className={style.btn}>
            <span>logout</span>
          </button>
        </div>
      ) : (
        <Link to="/registration">
          <button type="button" className={style.btn}>
            <span>РЕГИСТРАЦИЯ</span>
          </button>
        </Link>
      )}
    </header>
  );
};
export default Header;
