"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  // TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import { signup } from "@/lib/api";

export default function SignupPage() {
  // const [name, setName] = useState("");
  const [username, setuser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, password);
    // console.log("Signup with:", name, email, password);
  };

  // const AtaTextField = styled(TextField)(({ theme }) => ({
  //   "& label.Mui-focused": { backgroundColor: "red" },
  // }));

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, bg: "aqua" }}>
        <Typography variant="h4" gutterBottom>
          Signup Page
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          /> */}
          <TextField
            fullWidth
            label="Email"
            type="email"
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
            sx={{ mb: 2, bg: "red" }}
          />
          <Button fullWidth variant="contained" type="submit">
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
}
