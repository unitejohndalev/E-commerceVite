import React, { useState } from "react";
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
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit} action={<Link to="/login" />}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="first name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />

          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="lastName"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Stack>

        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />

        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />

        <TextField
          type="date"
          variant="outlined"
          color="secondary"
          label="Date of Birth"
          onChange={(e) => setDateBirth(e.target.value)}
          value={dateBirth}
          fullWidth
          required
          sx={{ mb: 4 }}
        />

        <Button variant="outline" color="secondary" type="submit">
          Register
        </Button>
      </form>
      <small>
        Already have an account? <Link to="/login"> Login here.</Link>
      </small>
    </React.Fragment>
  );
};

export default Register;
