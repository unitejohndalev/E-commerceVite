import React, { useState } from "react";
import "../styles/Register.css";
import { TextField, Stack } from "@mui/material";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateBirth, password);
  }

  return (
    <React.Fragment>
      <div className="container mt-15 lg:mt-10 mx-auto py-40">
        <div className="flex flex-col lg:flex-row bg-deep-orange-50 rounded-lg mx-auto shadow-xl overflow-hidden   lg:h-[550px] ">
          <div className="w-[350px] lg:w-1/2 lg:p-2 h-[400px] ml-[-1rem] ">
            <h2 className="font-semibold text-center text-black text-md lg:text-2xl mt-7 mb-5 lg:mt-6 lg:mb-5 lg:p-5 ">
              Register Form
            </h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
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
                  focused
                  type="date"
                  variant="outlined"
                  color="secondary"
                  label="Date of Birth"
                  onChange={(e) => setDateBirth(e.target.value)}
                  value={dateBirth}
                  size="small"
                  required
                  sx={{ minWidth: "20%", maxWidth: "80%" }}
                />
              </Stack>

              <div className="flex-col flex items-center justify-center  lg:gap-2 py-4">
                <Button variant="outline" color="secondary" type="submit">
                  Register
                </Button>
              </div>
            </form>
            <p className=" text-black text-center text-xs lg:text-sm gap-3 lg:mt-6 mt-1">
              {" "}
              Already have an account?
              <span className="underline">
                <Link to="/login"> Login here.</Link>
              </span>
            </p>
          </div>

          <div className="w-full lg:w-[1/2] lg:mb-12 md:mb-0 max-w-3xl flex flex-col justify-center bg-imageReg bg-no-repeat bg-cover bg-center h-[250px] lg:h-[550px] ">
            <h1 className=" text-black text-center  text-2xl lg:text-4xl font-medium">
              Welcome to Shoppy!
            </h1>
            <p className="text-black text-center">
              Be a member and receive rewards!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
