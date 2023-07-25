import React, { useState } from "react";
import "../styles/Register.css";
import { TextField, Stack } from "@mui/material";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

//Icons for button
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Pinterest } from "@mui/icons-material";

const Register = () => {
  //Destructuring of data in textField
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

  return (
    <React.Fragment>
      <div className=" w-[100%] flex  lg:flex-row bg-deep-orange-50 rounded-sm mx-auto shadow-xl overflow-hidden   lg:h-[80vh] border-1 border-black ">
        <div className="w-full lg:w-[1/2] lg:mb-12 md:mb-0 max-w-3xl flex flex-col justify-center bg-imageReg bg-no-repeat bg-cover bg-center h-[250px] lg:h-[80vh] ">
          <h1 className=" text-black text-center  text-2xl lg:text-4xl font-medium">
            Welcome to Shoppy!
          </h1>
          <p className="text-black text-center">
            Shop anywhere, buy everywhere.
          </p>
        </div>
        <div className="w-[500px] lg:w-1/2 lg:p-2 h-[400px] ml-[-1rem]  ">
          <form onSubmit={handleSubmit} action={<Link to="/login" />}>
            <h2 className="font-semibold text-center text-black text-md lg:text-2xl mt-7 mb-5 lg:mt-6 lg:mb-2 lg:p-2 ">
              Register Form
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
            <div className="flex-col flex items-center justify-center  lg:gap-2 py-1">
              <Button type="submit">Register</Button>
            </div>
          </form>
          <p className=" text-black text-center text-xs lg:text-sm gap-3 lg:mt-6 mt-1">
            Already have an account?
            <span className="underline">
              <Link to="/login"> Login here.</Link>
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
