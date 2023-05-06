import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export const useMyGetStorage = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) ?? defaultValue;
