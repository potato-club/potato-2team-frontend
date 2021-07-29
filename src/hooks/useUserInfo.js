import React, { useState, useEffect } from "react";
import { getUser } from "../components/core/api/user";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    void (async function () {
      try {
        void (async function () {
          const data = getUser(`https://gamsung-coding.shop/api/v1/info`);
          data.then((value) => {
            setUserInfo(value.data.data.name);
          });
        })();
      } catch (e) {
        //throw Error
      }
    })();
  }, []);

  return {
    userInfo,
  };
};

export default useUserInfo;
