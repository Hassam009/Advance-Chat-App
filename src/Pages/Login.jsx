import { useState } from "react";
import {
  Container,
  Paper,
  Button,
  Typography,
  TextField,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";

import { useInputValidation, useStrongPassword } from "6pp";
import { validateUsername } from "../Utils/validators";

// You can then use usernameValidator in your component

const handleFileChange = () => {
  // You can directly access the selected file from event.target.files[0]
  // Do something with the selected file directly here
};

import { CameraAlt as CameraAltIcon } from "@mui/icons-material";

const Login = () => {
  const [isLogin, setisLogin] = useState(true); // Make sure to initialize the state correctly
  const toggleLogin = () => setisLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", validateUsername);
  const password = useStrongPassword("");

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Fixed padding property
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                fontWeight: "bold",
                width: "100%",
                marginTop: "1rem",
                textAlign: "center", // Center the form content
              }}
            >
              <TextField
                required
                fullWidth
                label="UserName"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{ marginTop: "1rem", justifyContent: "center" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign="center" margin="1rem">
                {" "}
                OR
              </Typography>
              <Button
                sx={{ marginTop: "1rem", justifyContent: "center" }}
                variant="text"
                color="secondary"
                onClick={toggleLogin}
              >
                Sign Up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{
                fontWeight: "bold",
                width: "100%",
                marginTop: "1rem",
                textAlign: "center", // Center the form content
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                />
                <label htmlFor="file-input">
                  <IconButton component="span">
                    <CameraAltIcon />
                  </IconButton>
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </Stack>

              <TextField
                required
                fullWidth
                label=" Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label=" Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Username" // Make sure to use "Username" label
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography color="error" 
                variant="caption">{username.error}</Typography>
              )}
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
               {password.error && (
                <Typography color="error">
                  {password.error}</Typography>
              )}
              <Button
                sx={{ marginTop: "1rem", justifyContent: "center" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <Typography textAlign="center" margin="1rem">
                {" "}
                OR
              </Typography>
              <Button
                sx={{ marginTop: "1rem", justifyContent: "center" }}
                variant="text"
                color="secondary"
                onClick={toggleLogin}
              >
                Login instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
