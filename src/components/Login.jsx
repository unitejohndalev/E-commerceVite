import React, { useState, useContext } from "react";
import "../styles/Login.css";
import "../styles/Register.css";
import { TextField, Stack } from "@mui/material";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

//Icons for button
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Pinterest } from "@mui/icons-material";

const Login = () => {
  //destructure login state and toggle
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleSubmit = (event) => {
    //will prevent browser to refresh when event submit
    event.preventDefault();

    setErrorEmail(false);
    setErrorPassword(false);

    if (email === "") {
      setErrorEmail(true);
    }
    if (password == "") {
      setErrorPassword(true);
    }
  };

  //REGISTER
  //Destructuring of data in textField
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [dateBirth] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  //To disable default placehold display of "Date of Birth" && change to text
  const [focus, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  function handleSubmitReg(event) {
    event.preventDefault();
    console.log(firstName, lastName, emailReg, dateBirth, passwordReg);
  }

  const [logIn, setLogIn] = useState(true);

  //REGISTER BUTTON
  const logInToggle = () => {
    setLogIn((prev) => !prev);
    setRegIn(true);
  };

  const [RegIn, setRegIn] = useState();
  const regInToggle = () => {
    setRegIn((prev) => !prev);
    setLogIn(true);
  };

  return (
    <React.Fragment>
      {logIn && (
        <div className=" flex-col mt-[-9rem] lg:mt-[10rem] w-[90%] flex  lg:flex-row bg-deep-orange-50 rounded-sm mx-auto shadow-xl overflow-hidden   lg:h-[80vh] h-[90vh]  border-1 border-black ">
          {/* <!-- Left column container with background--> */}
          <div className="w-full lg:w-[1/2] lg:mb-12 md:mb-0 max-w-3xl flex flex-col justify-center bg-image bg-no-repeat bg-cover bg-center  h-[80vh]  ">
            <h1 className=" text-black text-center  text-2xl lg:text-4xl font-medium">
              Welcome to Shoppy!
            </h1>
            <p className="text-black text-center">
              Shop anywhere, buy everywhere.
            </p>
          </div>

          {/* <!-- Right column container with form --> */}

          <div className=" w-full lg:w-1/2 lg:p-2  lg:ml-[1rem] mt-[2rem]  ">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <h2 className="font-semibold text-center text-black text-md lg:text-2xl mt-8 mb-5 lg:mt-6 lg:mb-2 lg:p-2 ">
                Login Form
              </h2>

              <div className=" justify-center flex gap-3 lg:mb-10 mb-5">
                {/*Google Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <GoogleIcon
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>

                {/*Facebook Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <FacebookIcon
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>

                {/*Instagram Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <InstagramIcon
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>

                {/*Pinterest Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <Pinterest
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>
              </div>

              <Stack
                spacing={1}
                direction="column"
                sx={{ marginBottom: 3, ml: 8 }}
              >
                <TextField
                  label="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  variant="outlined"
                  color="secondary"
                  type="email"
                  size="small"
                  value={email}
                  onError={errorEmail}
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />
                <TextField
                  label="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  variant="outlined"
                  color="secondary"
                  type="password"
                  size="small"
                  value={password}
                  error={errorPassword}
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />
              </Stack>

              {/*Login Button */}
              <div className="flex-col flex items-center justify-center  lg:gap-2 py-4">
                <Button type="submit">Login</Button>
              </div>
            </form>
            <p className=" text-black text-center text-sm gap-3 lg:mt-6 mt-1 ">
              Need an account?
            </p>
            <div className=" flex items-center justify-center  lg:gap-2 py-1">
              <button
                onClick={() => logInToggle()}
                className="  mt-0 lg:mt-5 hover:bg-white text-black rounded-lg border-separate p-6 lg:p-2"
              >
                Register here.
              </button>
            </div>
          </div>
        </div>
      )}
      {RegIn && (
        <div className=" mt-[-9rem] flex-col lg:mt-[10rem] w-[90%] flex  lg:flex-row bg-deep-orange-50 rounded-sm mx-auto shadow-xl overflow-hidden  lg:h-[80vh] h-[90vh]  border-1 border-black ">
          <div className="w-full lg:w-[1/2] lg:mb-12 md:mb-0 max-w-3xl flex flex-col justify-center bg-imageReg bg-no-repeat bg-cover bg-center  h-[80vh]  ">
            <h1 className=" text-black text-center  text-2xl lg:text-4xl font-medium">
              Welcome to Shoppy!
            </h1>
            <p className="text-black text-center">
              Shop anywhere, buy everywhere.
            </p>
          </div>
          <div className=" w-full lg:w-1/2 lg:p-2  lg:ml-[1rem] mt-[2rem]  ">
            <form onSubmit={handleSubmitReg} action={<Link to="/login" />}>
              <h2 className="font-semibold text-center text-black text-md lg:text-2xl mt-7 mb-5 lg:mt-[-1rem] lg:mb-2 lg:p-2 ">
                Register Form
              </h2>

              <div className=" justify-center flex gap-3 lg:mb-5 mb-5">
                {/*Google Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <GoogleIcon
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>

                {/*Facebook Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <FacebookIcon
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>

                {/*Instagram Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <InstagramIcon
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>

                {/*Pinterest Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <Pinterest
                      style={{
                        fontSize: "2rem",
                        padding: "none",

                        color: "black",
                      }}
                    />
                  </div>
                </Link>
              </div>

              <Stack
                spacing={1}
                direction="column"
                sx={{ marginBottom: 3, ml: 8 }}
              >
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="First name"
                  size="small"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />

                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="LastName"
                  size="small"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />

                <TextField
                  type="email"
                  variant="outlined"
                  color="secondary"
                  label="Email"
                  onChange={(e) => setEmailReg(e.target.value)}
                  value={email}
                  size="small"
                  required
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />

                <TextField
                  type="password"
                  variant="outlined"
                  color="secondary"
                  label="Password"
                  onChange={(e) => setPasswordReg(e.target.value)}
                  value={password}
                  required
                  size="small"
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />
                <TextField
                  type="password"
                  variant="outlined"
                  color="secondary"
                  label="Confirm password"
                  onChange={(e) => setPasswordReg(e.target.value)}
                  value={password}
                  required
                  size="small"
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />

                <TextField
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={(e) => {
                    if (e.target.value) setHasValue(true);
                    else setHasValue(false);
                  }}
                  label="Date of Birth"
                  type={hasValue || focus ? "datetime-local" : "text"}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  required
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />
              </Stack>
              <div className="flex-col flex items-center justify-center  lg:gap-2 py-1">
                <Button type="submit">Register</Button>
              </div>
            </form>
            <p className=" text-black text-center text-sm lg:text-sm gap-3 lg:mt-3 mt-4">
              Already have an account?
            </p>
            <div className="flex-col flex items-center justify-center  lg:gap-2 py-1">
              <button
                onClick={() => regInToggle()}
                className="   hover:bg-white text-black rounded-lg border-separate p-6 lg:p-2"
              >
                Login here.
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
