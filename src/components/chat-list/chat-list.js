import { useState } from "react";
// import react router
import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { Chat } from "./chat";

export function ChatList() {
  const { roomId } = useParams();
  const [chats] = useState(["room1", "room2", "room3", "room4"]);

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <Link key={index} to={`/chat/${chat}`}>
          <Chat title={chat} selected={roomId === chat} />
        </Link>
      ))}
    </List>
  );
}