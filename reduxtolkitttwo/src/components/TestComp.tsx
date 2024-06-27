import React from "react";
import { useAppSelector } from "../redux/hooks";

export const TestComp = () => {
  const count = useAppSelector((s) => s.counter);
  return <h1>TestComp : {count}</h1>;
};
