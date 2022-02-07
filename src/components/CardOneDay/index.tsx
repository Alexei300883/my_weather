import React from "react";
import style from "../CardWrapper/Card/Card.module.scss";

type WidgetOneType = {
  city: string;
  isOneDay: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
  };
};

const WidgetOne: React.FC<WidgetOneType> = (props) => {
  const { isOneDay, city } = props;
  return (
    <div className={style.cardWrapper}>
      <h2>Ваш город {city}</h2>
      <div>
        <p>{new Date(isOneDay.dt * 1000).toLocaleDateString()}</p>
        <p> {isOneDay.weather[0].description}</p>
        <p>
          <img
            src={`http://openweathermap.org/img/wn/${isOneDay.weather[0].icon}@2x.png`}
            alt="logo"
          />
        </p>
        {/* <p>{process.env.REACT_APP_WEEKDAY[new Date(dt * 1000).setDate()]}</p> */}
        <p>температура днем {Math.round(isOneDay.temp)}</p>
        <p>влажность {isOneDay.humidity} %</p>
        <p>скорость ветра {isOneDay.wind_speed} м/с</p>
      </div>
    </div>
  );
};
export default WidgetOne;
