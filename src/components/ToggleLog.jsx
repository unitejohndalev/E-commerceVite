import { Facebook, Google } from "@mui/icons-material";
import React, { useState } from "react";
import { TextField, Stack } from "@mui/material";
import { Button } from "@material-tailwind/react";
import "../styles/Login.css";
import Login from "./img/login.jpg";
import Register from "./img/register.png";

const ToggleLog = () => {
  //login section
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [errorLogEmail, setErrorLogEmail] = useState(false);
  const [errorLogPassword, setErrorLogPassword] = useState(false);

  const handleSubmitLog = (event) => {
    //will prevent browser to refresh when event submit
    event.preventDefault();

    setErrorLogEmail(false);
    setErrorLogPassword(false);

    if (logEmail === "") {
      setErrorLogEmail(true);
    }
    if (logPassword == "") {
      setErrorLogPassword(true);
    }
    if (logEmail && logPassword) {
      console.log(logEmail, logPassword);
    }
  };

  //register section

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateBirth] = useState("");
  const [password, setPassword] = useState("");

  //To disable default placehold display of "Date of Birth" && change to text
  const [focus, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateBirth, password);
  }

  //toggle selector
  window.onload = function () {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-in-mode");
    });
  };

  return (
    <div className="container h-[100vh] mt-[10rem] bg-white before:absolute before:top-0 before:left-[-50%] before:translate-x-[100%] before:z-6">
      <div className="signin-signup">
        <form
          autoComplete="off"
          className="sign-in-form z-0"
          onSubmit={handleSubmitLog}
        >
          <h2 className="font-bold text-2xl p-5">Sign in</h2>
          <div className="input-field">
            <Stack
              spacing={1}
              direction="column"
              sx={{ marginBottom: 4, ml: 8 }}
            >
              <TextField
                label="Email"
                onChange={(e) => setLogEmail(e.target.value)}
                required
                variant="outlined"
                type="text"
                size="small"
                sx={{}}
                value={logEmail}
                onError={errorLogEmail}
              />
              <TextField
                label="Enter your password"
                onChange={(e) => setLogPassword(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="password"
                size="small"
                value={logPassword}
                error={errorLogPassword}
                sx={{ minWidth: "20%", maxWidth: "80%" }}
              />
            </Stack>
          </div>
          <Button type="submit" className="">
            Submit
          </Button>
          <p className="">Or Sign in with social platform</p>
          <div className="">
            <a href="" className="href">
              <Facebook />
            </a>
            <a href="" className="href">
              <Google />
            </a>
          </div>
        </form>

        <form
          autoComplete="off"
          className="sign-in-form z-0"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-2xl p-5">Sign up</h2>
          <div className="input-field">
            <Stack
              spacing={1}
              direction="column"
              sx={{ marginBottom: 4, ml: 8 }}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
          </div>
          <Button type="submit">Register</Button>
          <p className="">Or Sign in with social platform</p>
          <div className="">
            <a href="" className="href">
              <Facebook />
            </a>
            <a href="" className="href">
              <Google />
            </a>
          </div>
        </form>
      </div>
      <div className="absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-around bg-white">
        <div className=" z-6  text-center min-w[238px] pt-10 w-[35%] left-panel">
          <div className="content">
            <h3 className="text-3xl font-bold">Member of Brand?</h3>
            <p className="text-lg pb-0 pt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              eum assumenda tempore, reprehenderit deserunt at adipisci ipsum
              asperiores expedita accusamus explicabo maxime debitis esse
              aliquid animi dolore provident similique architecto?
            </p>
            <Button className="mb-10" id="sign-in-btn">
              Sign-in
            </Button>
          </div>
          <img src={Register} className="w-[100%]" />
        </div>

        <div className=" text-center min-w[238px] pt-10 w-[35%] z-6 right-panel">
          <div className="content">
            <h3 className="text-3xl font-bold">New Brand?</h3>
            <p className="text-lg pb-0 pt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              eum assumenda tempore, reprehenderit deserunt at adipisci ipsum
              asperiores expedita accusamus explicabo maxime debitis esse
              aliquid animi dolore provident similique architecto?
            </p>
            <Button className="mb-10" id="sign-up-btn">
              Sign-up
            </Button>
          </div>
          <img src={Login} className="w-[100%] " />
        </div>
      </div>
    </div>
  );
};

export default ToggleLog;
