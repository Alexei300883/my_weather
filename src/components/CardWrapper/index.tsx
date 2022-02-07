import React from "react";
import Card from "./Card/index";

type CardWrapperType = {
  city: string;
  data: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: {
      day: number;
      eve: number;
      morn: number;
      night: number;
    };
    humidity: number;
    moon_phase: number;
    moonrise: number;
    moonset: number;
    pop: number;
    pressure: number;
    snow: number;
    sunrise: number;
    sunset: number | string;
    uvi: number;
    weather: any;
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
  }[];
};

const CardWrapper: React.FC<CardWrapperType> = (props) => {
  const { data, city } = props;
  return (
    <div>
      <h2>Прогноз на 8 дней. Ваш город {city}</h2>
      <div>
        {data.map((el) => (
          <Card
            humidity={el.humidity}
            key={el.dt}
            feelsLike={el.feels_like}
            windSpeed={el.wind_speed}
            dt={el.dt}
            weather={el.weather}
          />
        ))}
      </div>
    </div>
  );
};
export default CardWrapper;
