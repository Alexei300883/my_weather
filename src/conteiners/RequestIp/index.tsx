import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestCity from "../RequestCity";

const RequestIp = () => {
  const [userIp, setUserIp] = useState(null);

  const client = axios.create({
    baseURL: "https://api.ipify.org",
  });

  useEffect(() => {
    async function getIp() {
      const response = await client.get("/?format=json");
      setUserIp(response.data.ip);
    }
    getIp();
  }, []);
  console.log("userIp", userIp);

  return (
    <div>
      {userIp !== null ? (
        <RequestCity userIp={userIp} />
      ) : (
        <div>Нет данных</div>
      )}
    </div>
  );
};

export default RequestIp;
