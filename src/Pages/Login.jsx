import { useState } from 'react';
import { Container, Paper, Button, Typography, TextField } from "@mui/material";

const Login = () => {
  const [isLogin, setisLogin] = useState(true); // Make sure to initialize the state correctly
  const toggleLogin = () => setisLogin(!isLogin);

  return (
    <Container component={"main"} maxWidth="xs" 
    sx={{ 
      height: '100vh',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center' }}
    >
      <Paper elevation={3} sx={{ Padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form 
            style={{
              fontWeight: 'bold',
              width: '100%',
              marginTop: '1rem',
              textAlign: 'center', // Center the form content
            }}
            >
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
              <Button sx={{ marginTop: "1rem", justifyContent: 'center' }} variant="contained" color="primary" type="submit">Login</Button>
              <Typography textAlign="center" margin="1rem"> OR</Typography>
              <Button
                sx={{ marginTop: "1rem", justifyContent: 'center' }}
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
