import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

function HomeLayout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomeLayout;
