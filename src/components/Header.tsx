import { Link } from "react-router-dom";
import "./styles/header.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
type Props = {};

function Header({}: Props) {
  return (
    <header className="header">
      <h1>Blog</h1>
      <nav>
        <ul>
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
    </header>
  );
}

export default Header;
