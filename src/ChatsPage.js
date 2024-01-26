import React from "react";
import {
  ChatEngine,
  MultiChatSocket,
  useMultiChatLogic,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

function ChatsPage(props) {
  const chatProps = useMultiChatLogic(
    " e74bd17d-97a6-45e9-b354-bd6be62188e6",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
}

export default ChatsPage;
