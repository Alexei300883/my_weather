import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input/index";
import CardCityWeather from "../../components/CardCityWeather";

const RequestCityWeather: React.FC = () => {
  const [datas, setDatas] = useState(undefined);
  const [city, setCity] = useState("");

  const handler = () => {
    if (city !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${process.env.REACT_APP_API_KEY}`;
      axios({
        method: "GET",
        url,
        withCredentials: false,
      }).then((response) => {
        console.log("city", response);
        if (response.status === 200) {
          setDatas(response.data);
        }
      });
    } else {
      console.log("вы не чего не ввели");
    }
  };

  console.log("datacity", datas);
  return (
    <div>
      <Input
        value={city}
        setValue={setCity}
        placeholder="Введите город"
        type="text"
        title="город"
      />
      <div>
        <button onClick={handler} type="submit">
          отправить
        </button>
        {datas ? <CardCityWeather datas={datas} /> : <div>нет данных</div>}
      </div>
    </div>
  );
};
export default RequestCityWeather;
