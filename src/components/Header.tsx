import { Link } from "react-router-dom";
import "../styles/header.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
type Props = {};

function Header({}: Props) {
  return (
    <header className="header flex items-center justify-center flex-wrap shadow-lg mb-4 w-full ">
      <div className="flex items-center justify-between p-3 w-full max-w-4xl">
        <h1 className="text-3xl flex-1 font-extrabold ">
          <Link to={"/"} className="text-gray-800">
            Blog
          </Link>
        </h1>
        <nav className=" flex items-end justify-center">
          <ul className="flex items-center justify-between gap-4 text-3xl">
            <li>
              <Link to={"/"}>
                <AiFillTwitterCircle />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <BsLinkedin />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <AiFillGithub />
              </Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
