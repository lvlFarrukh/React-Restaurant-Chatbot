import React, { Component, useState, Fragment, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import "../App";
import BotMessege from "../components/BotMessege";
import UserMessege from "../components/UserMessage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserMessage, chatToBot } from "../store/Messages";

const Chatapp = () => {
  const [userName, setuserName] = useState();
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const useMessage = useRef("");
  const useChatScreen = useRef();

  console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();
    if (useMessage.current.value !== "") {
        sendMessageToBot(useMessage.current.value)
        useMessage.current.value = "";
    }
  };

  const sendMessageToBot = (message) => {
    dispatch(addUserMessage(message));
    dispatch(chatToBot(message));
  }
  useEffect(() => {
    setuserName(prompt("Please enter your name"));
    dispatch(chatToBot("hi"));
  }, []);

  useEffect(() => {
    useChatScreen.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <Fragment>
      <section className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt" /> ABC Restaurant
          </div>
          <div className="msger-header-options">
            <span>
              <i className="fas fa-cog" />
            </span>
          </div>
        </header>

        <main className="msger-chat">
          {messages.map((message, index) => {
            return message.type === "bot" ? (
              <BotMessege
                key={index}
                message={message.message}
                quickReplies={message.quickReply}
                images={message.images}
                sendQuickReply={sendMessageToBot}
              />
            ) : (
              <UserMessege
                key={index}
                userName={userName}
                message={message.message}
              />
            );
          })}
          <div ref={useChatScreen} />
        </main>
        <form className="msger-inputarea" onSubmit={sendMessage}>
          <input
            ref={useMessage}
            type="text"
            className="msger-input"
            placeholder="Enter your message..."
          />
          <button type="submit" className="msger-send-btn">
            Send
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Chatapp;
