import React, { useState } from "react";
import "../styles/Login.css";
import { TextField } from "@mui/material";
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
      <div className="container mx-auto py-40">
        <div className="flex bg-deep-orange-50 rounded-lg mx-auto shadow-xl overflow-hidden w-[100%] max-w-[100%] h-[550px] ">
          {/* <!-- Left column container with background--> */}
          <div className="w-1/2 mb-12 md:mb-0 max-w-2xl flex flex-col justify-center bg-image">
            <h1 className=" text-black text-center text-4xl font-medium">
              Welcome to Shoppy!
            </h1>
            <p className="text-black text-center">
              Shop anywhere, buy everywhere.
            </p>
          </div>

          {/* <!-- Right column container with form --> */}

          <div className="w-1/2 p-2 ">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <h1 className="text-center text-2xl mt-6 mb-5 p-5 ">
                Login Form
              </h1>

              <div className=" justify-center flex gap-3 mb-10">
                {/*Google Button */}
                <Button
                  size="sm"
                  className=" rounded-full flex items-center gap-3"
                >
                  <GoogleIcon />
                </Button>

                {/*Facebook Button */}
                <Button
                  size="sm"
                  className=" rounded-full flex items-center gap-3"
                >
                  <FacebookIcon />
                </Button>

                {/*Apple Button */}
                <Button
                  size="sm"
                  className=" rounded-full flex items-center gap-3"
                >
                  <AppleIcon />
                </Button>
              </div>

              <TextField
                label="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="email"
                size="small"
                sx={{ width: "80%", ml: 8, mb: 3 }}
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
                sx={{ width: "80%", ml: 8, mb: 3 }}
              />

              {/*Login Button */}
              <div className="flex-col flex items-center justify-center gap-2 py-4">
                <Button className="rounded-full md" type="submit">
                  Login
                </Button>
              </div>
            </form>
            <p className="text-center text-xs gap-3 mt-3">
              Need an account?
              <span className="underline">
                <Link to="/"> Register here.</Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* </div> */}
    </React.Fragment>
  );
};

export default Login;
