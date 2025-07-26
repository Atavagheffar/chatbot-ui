"use client";
import { useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  TextField,
  IconButton,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your personal AI Assistant Slothpilot.",
    },
    {
      sender: "bot",
      text: "Do Androids Dream of Electric Sheep? is a 1968 dystopian science fiction novel by Philip K. Dick...",
    },
    { sender: "user", text: "Select One of Them: one, two, three" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const chats = [
    { id: 1, title: "How to get fit without doing anything", time: "2m ago" },
    { id: 2, title: "Hacking FBI Server with raspberry pi", time: "2m ago" },
    { id: 3, title: "Compsci SICP Tutorial course", time: "2m ago" },
  ];

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <Grid
      container
      sx={{ height: "100vh", width: "100vw", backgroundColor: "whiteSmoke" }}
    >
      {/* Sidebar */}
      <Grid
        item
        xs={3}
        sx={{
          bgcolor: "#f7f7f7",
          borderRight: "1px solid #ddd",
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: "blue" }}>
          slothui
        </Typography>
        <List>
          {chats.map((chat) => (
            <ListItem button key={chat.id}>
              <ListItemText
                primary={chat.title}
                secondary={chat.time}
                sx={{ color: "black" }}
              />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          + New Chat
        </Button>
      </Grid>

      {/* Chat Area */}
      <Grid
        item
        xs={9}
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        <Box sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
          <Typography variant="h6">
            Hacking FBI Server with raspberry pi
          </Typography>
        </Box>

        {/* Messages */}
        <Box sx={{ flex: 1, p: 2, overflowY: "auto", bgcolor: "#fafafa" }}>
          {messages.map((msg, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                mb: 1,
                maxWidth: "70%",
                bgcolor: msg.sender === "bot" ? "#e0f7fa" : "#d1c4e9",
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Typography variant="body1">{msg.text}</Typography>
            </Paper>
          ))}
        </Box>

        {/* Input */}
        <Box
          sx={{
            display: "flex",
            p: 2,
            borderTop: "1px solid #ddd",
            bgcolor: "#f7f7f7",
          }}
        >
          <TextField
            fullWidth
            placeholder="Message to slothpilot..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}
