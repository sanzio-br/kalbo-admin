import "./login.css";
import { useState } from "react";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
const Signing = ({ setIsAuth }) => {
  const [logerror, setLogError] = useState("") 
  let navigate = useNavigate();
  const [userCredential, setUserCredential] = useState({
    email: "",
    passWord: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setUserCredential({ ...userCredential, [event.target.name]: value });
  };
  const login = async (event) => {
    event.preventDefault();
    try {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      setLogError(error)
    }
  };
  return (
    <div id="main-wrapper" className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h4 font-weight-bold text-theme">Login</h3>
                    </div>

                    <h6 className="h5 mb-0">Welcome back!</h6>
                    <p className="text-muted mt-2 mb-5">
                      Enter your email address and password to access admin
                      panel.
                    </p>

                    <form>
                      <div className="form-group">
                        {logerror && <Alert key="danger" variant="danger">
                          Incorect email or password please chech and try again
                        </Alert>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-5">
                        <label className="form-label">Password</label>
                        <input
                          name="passWord"
                          type="password"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-theme"
                        onClick={login}
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right"></div>
                    <div className="account-testimonial">
                      <h4 className="text-white mb-4">Exploring the world</h4>
                      <p className="lead text-white">""</p>
                      <p>- Admin User</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signing;
