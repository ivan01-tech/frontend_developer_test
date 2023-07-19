import { Link } from "react-router-dom";
import "../styles/header.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
type Props = {};

function Header({}: Props) {
  return (
    <header className="header flex items-center justify-center flex-wrap">
      <div className="flex items-center justify-between p-3 w-full max-w-4xl">
        <h1>Blog</h1>
        <nav>
          <ul className="flex items-center justify-between gap-4 text-2xl">
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
