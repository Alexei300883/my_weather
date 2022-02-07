import React from "react";

type CardCityType = {
  datas: {
    clouds: {};
    cod: null;
    coord: { lon: number; lat: number };
    dt: number;
    id: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
      pressure: number;
    };
    name: string;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    wind: { speed: number; deg: number; gust: number };
  };
};

const CardCityWeather: React.FC<CardCityType> = (props) => {
  const { datas } = props;
  return (
    <div>
      <h2>Ваш город {datas.name}</h2>
      <div>
        <p>{new Date(datas.dt * 1000).toLocaleDateString()}</p>
        <p> {datas.weather[0].description}</p>
        <p>
          <img
            src={`http://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}
            alt="logo"
          />
        </p>
        {/* <p>{process.env.REACT_APP_WEEKDAY[new Date(dt * 1000).setDate()]}</p> */}
        <p>температура днем {Math.round(datas.main.temp)}</p>
        <p>влажность {datas.main.humidity} %</p>
        <p>скорость ветра {datas.wind.speed} м/с</p>
      </div>
    </div>
  );
};

export default CardCityWeather;
