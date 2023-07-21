import React, { useState } from "react";
import "../styles/Login.css";
import { TextField, Stack } from "@mui/material";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

//Icons for button
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const Login = () => {
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
    if (email && password) {
      console.log(email, password);
    }
  };
  return (
    <React.Fragment>
      <div className="container mt-15 lg:mt-10 mx-auto py-40 ">
        <div className="flex flex-col lg:flex-row bg-deep-orange-50 rounded-lg mx-auto shadow-xl overflow-hidden   lg:h-[550px] ">
          {/* <!-- Left column container with background--> */}
          <div className="w-full lg:w-[1/2] lg:mb-12 md:mb-0 max-w-3xl flex flex-col justify-center bg-image bg-no-repeat bg-cover bg-center h-[250px] lg:h-[550px] ">
            <h1 className=" text-black text-center  text-2xl lg:text-4xl font-medium">
              Welcome to Shoppy!
            </h1>
            <p className="text-black text-center">
              Shop anywhere, buy everywhere.
            </p>
          </div>

          {/* <!-- Right column container with form --> */}

          <div className="w-[350px] lg:w-1/2 lg:p-2 h-[400px] ml-[-1rem] ">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <h1 className="font-semibold text-center text-black text-md lg:text-2xl mt-7 mb-5 lg:mt-6 lg:mb-5 lg:p-5 ">
                Login Form
              </h1>

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

                {/*Apple Button */}
                <Link to="/">
                  <div className=" rounded-full flex items-center gap-3">
                    <AppleIcon
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
                sx={{ marginBottom: 4, ml: 8 }}
              >
                <TextField
                  label="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  variant="outlined"
                  color="secondary"
                  type="email"
                  size="small"
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                  value={email}
                  onError={errorEmail}
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
                <Button className="rounded-full md" type="submit">
                  Login
                </Button>
              </div>
            </form>
            <p className=" text-black text-center text-xs gap-3 lg:mt-6 mt-1">
              Need an account?
              <span className="underline">
                <Link to="/register"> Register here.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
