import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

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
      <div className=" items-center justify-center p-8">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold mb-4">Login Form</h1>

          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            value={email}
            onError={errorEmail}
          />
          <TextField
            label="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={password}
            error={errorPassword}
            fullWidth
            sx={{ mb: 3 }}
          />
          <div className="flex items-center justify-center py-4">
            <Button className="rounded-full" type="submit">
              Login
            </Button>
          </div>
        </form>
        <p className="text-center">
          Need an account?{" "}
          <span className="underline">
            <Link to="/">Register here.</Link>
          </span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Login;
