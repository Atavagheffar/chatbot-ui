import Image from "next/image";
import styles from "./page.module.css";
import LoginPage from "./login/page";
import SignupPage from "./signup/page.jsx";

// ("use client");
import { Button, Container, Box, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Our ChatBot :)
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
          <Button variant="contained" component={Link} href="/login">
            Login
          </Button>
          <Button variant="outlined" component={Link} href="/signup">
            Signup
          </Button>
          <Button variant="outlined" component={Link} href="/chat">
            ChatPage
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
