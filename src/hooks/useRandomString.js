import { useState } from "react";
//https://medium.com/@Chris1993/15-useful-custom-react-hooks-for-your-next-web-app-c5902d868f4c
const useRandomString = () => {
  const [randomString, setRandomString] = useState("");

  const changeRandomString = () => {
    let randomString = "";
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * letters.length);
      randomString += letters[randomIndex];
    }
    setRandomString(randomString);
  };

  return [randomString,changeRandomString];
};

export default useRandomString;
