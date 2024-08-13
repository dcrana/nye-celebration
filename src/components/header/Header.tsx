import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { FC } from "react";

const Header: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        New Year Celebration
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/registration"
              className={
                location.pathname === "/registration" ? styles.active : ""
              }
            >
              Registration
            </Link>
          </li>
          <li>
            <Link
              to="/registrants"
              className={
                location.pathname === "/registrants" ? styles.active : ""
              }
            >
              Registered Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
