import { social } from "./data";
import logo from "../imgs/logo.PNG";
import { FaBars } from "react-icons/fa";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
const Navbar = ({ isAuth, setIsAuth }) => {
  const logout = async () => {
    await signOut(auth);
    sessionStorage.clear();
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname = "/login";
  };
  return (
    <>
      <div className="topbar container">
        <div className="left">
          <a href="mailto:kalboadventures2019@gmail.com">
            kalboadventures2019@gmail.com
          </a>{" "}
          <span>|</span>
          <a href="tel:+254720126177">+254720126177</a>
        </div>
        <div className="right">
          <a href="/">FAQ</a> <span>|</span>
          <a href="/booking">Booking</a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg container sticky-top mt-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="/kalbo">
            <img
              src={logo}
              alt=""
              width="120"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/safari-packages"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Packages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/packages">
                      All packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/safari-packages">
                      safari-packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/international-packages">
                      Internatinal packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/domestic-packages">
                      Domestic packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/honeymoon-packages">
                      Honeymoon packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/beach-packages">
                      Beach packages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/team-building-packages">
                    Team building packages
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              {isAuth ? (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/post-package"
                    >
                      post package
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/post-blog"
                    >
                      post blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/post-gallery"
                    >
                      post Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <li className="nav-item">
                      <a
                        onClick={logout}
                        className="nav-link active"
                        aria-current="page"
                        href="/login"
                      >
                        Sign out
                      </a>
                    </li>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                    >
                      Sign in
                    </a>
                  </li>
                </>
              )}
            </ul>
            <div className="d-flex icons">
              {social.map(({ id, url, icon }) => {
                return (
                  <a key={id} href={url}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
