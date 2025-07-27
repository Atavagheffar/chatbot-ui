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
  Container,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// const sampleConversations = [
//   {
//     id: 1,
//     title: "مشاوره ورزشی",
//     messages: [
//       {
//         sender: "user",
//         text: "سلام! می‌خوام ورزش رو شروع کنم ولی نمی‌دونم از کجا.",
//       },
//       {
//         sender: "ai",
//         text: "سلام! می‌تونم کمکتون کنم. هدفتون کاهش وزن، افزایش عضله یا سلامتی عمومی هست؟",
//       },
//       { sender: "user", text: "بیشتر برای کاهش وزن و کمی هم عضله‌سازی." },
//       { sender: "ai", text: "عالیه! چند روز در هفته می‌تونید ورزش کنید؟" },
//       { sender: "user", text: "۳ روز در هفته می‌تونم." },
//     ],
//   },
//   {
//     id: 2,
//     title: "پشتیبانی خرید آنلاین",
//     messages: [
//       { sender: "user", text: "سلام. سفارشم هنوز نرسیده." },
//       { sender: "ai", text: "سلام! شماره سفارش رو لطفاً ارسال می‌کنید؟" },
//       { sender: "user", text: "#12345" },
//       {
//         sender: "ai",
//         text: "ممنون! سفارش شما در حال ارسال است و فردا تحویل داده می‌شود.",
//       },
//       { sender: "user", text: "خیلی ممنون از راهنمایی." },
//     ],
//   },
//   {
//     id: 3,
//     title: "گفتگوی عمومی",
//     messages: [
//       { sender: "user", text: "سلام! می‌تونی برام یه جوک بگی؟" },
//       {
//         sender: "ai",
//         text: "البته! چرا کامپیوتر به دکتر رفت؟ چون ویروس گرفته بود 😄",
//       },
//       { sender: "user", text: "😂 خوب بود! یکی دیگه بگو." },
//       {
//         sender: "ai",
//         text: "حتماً! چرا برنامه‌نویس‌ها همیشه قهوه می‌خورند؟ چون بدون کافئین نمی‌تونن دیباگ کنن!",
//       },
//       { sender: "user", text: "حرف حسابه 😄" },
//     ],
//   },
// ];

export default function ChatPage() {
  const sampleConversations = [
    {
      id: 1,
      title: "مشاوره ورزشی",
      updatetime: "2 min ago",
      messages: [
        {
          sender: "user",
          text: "سلام! می‌خوام ورزش رو شروع کنم ولی نمی‌دونم از کجا.",
        },
        {
          sender: "ai",
          text: "سلام! می‌تونم کمکتون کنم. هدفتون کاهش وزن، افزایش عضله یا سلامتی عمومی هست؟",
        },
        { sender: "user", text: "بیشتر برای کاهش وزن و کمی هم عضله‌سازی." },
        { sender: "ai", text: "عالیه! چند روز در هفته می‌تونید ورزش کنید؟" },
        { sender: "user", text: "۳ روز در هفته می‌تونم." },
      ],
    },
    {
      id: 2,
      title: "پشتیبانی خرید آنلاین",
      updatetime: "5 min ago",
      messages: [
        { sender: "user", text: "سلام. سفارشم هنوز نرسیده." },
        { sender: "ai", text: "سلام! شماره سفارش رو لطفاً ارسال می‌کنید؟" },
        { sender: "user", text: "#12345" },
        {
          sender: "ai",
          text: "ممنون! سفارش شما در حال ارسال است و فردا تحویل داده می‌شود.",
        },
        { sender: "user", text: "خیلی ممنون از راهنمایی." },
      ],
    },
    {
      id: 3,
      title: "گفتگوی عمومی",
      updatetime: "1 hour ago",
      messages: [
        { sender: "user", text: "سلام! می‌تونی برام یه جوک بگی؟" },
        {
          sender: "ai",
          text: "البته! چرا کامپیوتر به دکتر رفت؟ چون ویروس گرفته بود 😄",
        },
        { sender: "user", text: "😂 خوب بود! یکی دیگه بگو." },
        {
          sender: "ai",
          text: "حتماً! چرا برنامه‌نویس‌ها همیشه قهوه می‌خورند؟ چون بدون کافئین نمی‌تونن دیباگ کنن!",
        },
        { sender: "user", text: "حرف حسابه 😄" },
      ],
    },
  ];
  //   const [currentChat, setCurrentChat] = useState(sampleConversations[0]);

  const [conversations, setConversations] = useState(sampleConversations);
  const [currentChat, setCurrentChat] = useState(sampleConversations[0]);

  //   ****************************************************

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");
  };
  // **********************************************************
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "100dvh",
        width: "100%",
        backgroundColor: "white",
        fontFamily: "Lalezar",
        direction: "rtl",
      }}
    >
      {/* **************************** Sidebar */}
      <Box
        sx={{
          width: "25%",
          bgcolor: "#f7f7f7",
          borderRight: "1px solid #ddd",
          p: 2,
          fontFamily: "Lalezar",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, color: "blue", fontFamily: "Lalezar" }}
        >
          slothui
        </Typography>
        <Box>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: "black", fontFamily: "Lalezar" }}
          >
            Chats
          </Typography>
          {conversations.map((chat) => (
            <Box
              key={chat.id}
              onClick={() => setCurrentChat(chat)}
              sx={{
                p: 1.5,
                mb: 1,
                borderRadius: 1,
                cursor: "pointer",
                bgcolor: currentChat.id === chat.id ? "#e3f2fd" : "#f7f7f7",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "red", fontFamily: "Lalezar" }}>
                  {chat.title}
                </Typography>
                <Typography
                  sx={{
                    color: "black",
                    fontFamily: "Lalezar",
                    direction: "ltr",
                  }}
                >
                  {chat.updatetime}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="gray"
                fontFamily="Lalezar"
                noWrap
              >
                {chat.messages[0].text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* <List>
          {sampleConversations.map((Chat) => (
            <ListItem button key={Chat.id}>
              <ListItemText
                primary={Chat.title}
                secondary={Chat.updatetime}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "black",
                }}
              />
            </ListItem>
          ))}
        </List> */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, fontFamily: "Lalezar" }}
        >
          چت جدید
        </Button>
      </Box>
      {/* **************************** Chat Area */}
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          color: "black",
          bgcolor: "white",
          fontFamily: "Lalezar",
        }}
      >
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid #ddd",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Lalezar",
          }}
        >
          <Typography variant="h6" fontFamily="Lalezar">
            {currentChat.title}
          </Typography>
          <Box
            sx={{
              p: 1,
              border: "1px solid black",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "Lalezar",
              direction: "ltr",
            }}
          >
            <Box sx={{ width: 50, height: 50 }}>
              <img
                src="https://avatar.iran.liara.run/public"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box sx={{ p: 2, fontFamily: "Lalezar" }}>
              <Typography variant="body2" fontFamily="Lalezar">
                Ata Vagheffar
              </Typography>
              <Typography fontFamily="Lalezar">205 Tokens Left</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 2,
            overflowY: "auto",
            fontFamily: "Lalezar",
            direction: "ltr",
          }}
        >
          {currentChat.messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                mb: 1,
                display: "flex",
                direction: "rtl",
                fontFamily: "Lalezar",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  bgcolor: msg.sender === "user" ? "#1976d2" : "#f1f1f1",
                  color: msg.sender === "user" ? "#fff" : "#000",
                  p: 1.5,
                  borderRadius: 2,
                  maxWidth: "70%",
                }}
              >
                {msg.text}
              </Box>
            </Box>
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
            sx={{
              width: "65%",
              margin: "0 auto",
              fontFamily: "Lalezar",
            }}
            placeholder="پیام خود را اینجا تایپ کنید ..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}
