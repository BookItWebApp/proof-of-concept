import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTab } from "./store/tab";

export default () => {
  const tab = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchTab());
    console.log(tab);
  }, [dispatch]);

  return (
    <div>
      <h1>Hello Worlds!</h1>
      <p>{`${tab.url}`}</p>
    </div>
  );
};
