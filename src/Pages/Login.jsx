import { useState } from 'react';
import { Container, Paper, Button, Typography, TextField } from "@mui/material";

const Login = () => {
  const [isLogin, setisLogin] = useState(true); // Make sure to initialize the state correctly
  const toggleLogin = () => setisLogin(!isLogin);

  return (
    <Container component={"main"} maxWidth="sx">
      <Paper elevation={3} sx={{ Padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="UserName"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button sx={{ marginTop: "1rem" }} variant="contained" color="primary" type="submit">Login</Button>
              <Typography textAlign="center" margin="1rem"> OR</Typography>
              <Button
                sx={{ marginTop: "1rem" }}
                variant="text" color="secondary"
                onClick={toggleLogin}
              >Sign in</Button>
            </form>
          </> 
        ) : (
          <span>Register</span>
        )}
      </Paper>
    </Container>
  );
}

export default Login;
