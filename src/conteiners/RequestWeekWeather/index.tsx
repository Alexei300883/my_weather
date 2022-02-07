import React, { useEffect, useState } from "react";
import axios from "axios";
import CardOneDay from "../../components/CardOneDay";
import CardWrapper from "../../components/CardWrapper";
import styles from "../../components/CardWrapper/CardWrapper.module.scss";

type RequestWeekWeatherType = {
  userCity: any;
};

const client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const RequestWeekWeather: React.FC<RequestWeekWeatherType> = (props) => {
  const { userCity } = props;
  const [data, setData] = useState(undefined);
  const [isOneDay, setIsOneDay] = useState(undefined);
  const [oneDay, setOneDay] = useState(false);

  useEffect(() => {
    async function getWeather() {
      const response = await client.get(
        `/onecall?lat=${userCity.latitude}&lon=${userCity.longitude}&units=metric&exclude=hourly,alerts,minutely&lang=ru&appid=${process.env.REACT_APP_API_KEY}`
      );
      setData(response.data.daily);
      setIsOneDay(response.data.current);
    }
    getWeather();
  }, []);

  console.log("data", data);
  console.log("isOneDay", isOneDay);
  return (
    <div>
      {/* {data !== undefined && oneDay ? (
        <Widget data={data} city={userCity.city} />
      ) : (
        <div>.</div>
      )}
      {isOneDay !== undefined && !oneDay ? (
        <WidgetOne isOneDay={isOneDay} city={userCity.city} />
      ) : (
        <div>.</div>
      )} */}

      {data && oneDay && <CardWrapper data={data} city={userCity.city} />}
      {isOneDay && !oneDay && (
        <CardOneDay isOneDay={isOneDay} city={userCity.city} />
      )}
      {!data && !isOneDay && <div>нет данных</div>}
      <br />
      <button
        className={styles.bt}
        type="button"
        onClick={() => setOneDay((prev) => !prev)}>
        {oneDay ? "Погода на один день" : "Погода на неделю"}
      </button>
    </div>
  );
};
export default RequestWeekWeather;
