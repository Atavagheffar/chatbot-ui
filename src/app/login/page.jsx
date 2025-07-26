"use client";
import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { login } from "@/lib/api";

export default function LoginPage() {
  const [username, setuser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await login(username, password);
    await fetch("http://localhost:8000/user/profile", {
      method: "get",
      headers: new Headers({
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhLnZhZ2hlZmZhckBnbWFpbC5jb20iLCJleHAiOjE3NTMzNzIxMzV9.JQkil_T4Ruuv0kCxvUcEpPziD9VfR4OHP8QqKxJvjMI",
      }),
    });
    // console.log("Login with:", username, password);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Login Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="username"
            type="username"
            value={username}
            onChange={(e) => setuser(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button fullWidth variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}
