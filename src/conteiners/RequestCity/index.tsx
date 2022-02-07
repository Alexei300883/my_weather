import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestWeather from "../RequestWeekWeather/index";

type RequestCityType = {
  userIp: string;
};

const client = axios.create({
  baseURL: "http://ipwhois.app/json",
});

const RequestCity: React.FC<RequestCityType> = (props) => {
  const { userIp } = props;
  const [userCity, setUserCity] = useState(null);

  useEffect(() => {
    async function getCity() {
      const response = await client.get(`/${userIp}`);
      setUserCity(response.data);
    }
    getCity();
  }, []);
  console.log("userCity", userCity);
  return (
    <div>
      {userCity !== null ? (
        <RequestWeather userCity={userCity} />
      ) : (
        <div>Нет данных</div>
      )}
    </div>
  );
};

export default RequestCity;
