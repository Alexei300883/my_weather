import React from "react";
import styles from "./Card.module.scss";

type CardType = {
  humidity: number;
  feelsLike: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  windSpeed: number;
  dt: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
};

const Card: React.FC<CardType> = (props) => {
  const { humidity, feelsLike, windSpeed, dt, weather } = props;
  console.log();
  return (
    <div className={styles.cardWrapper}>
      <p>{new Date(dt * 1000).toLocaleDateString()}</p>
      <p> {weather[0].description}</p>
      <p>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="logo"
        />
      </p>
      {/* <p>{process.env.REACT_APP_WEEKDAY[new Date(dt * 1000).setDate()]}</p> */}
      <p>температура днем {Math.round(feelsLike.day)}</p>
      <p>температура ночью {Math.round(feelsLike.night)}</p>
      <p>температура утром {Math.round(feelsLike.morn)}</p>
      <p>влажность {humidity} %</p>
      <p>скорость ветра {windSpeed} м/с</p>
    </div>
  );
};
export default Card;
