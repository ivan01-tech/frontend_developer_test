import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

function loayout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default loayout;
