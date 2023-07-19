import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {};

function HomeLayout({}: Props) {
  return (
    <>
      <Header />
      <main className="m-auto px-3 md:px-0 w-full min-h-screen max-w-4xl bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
