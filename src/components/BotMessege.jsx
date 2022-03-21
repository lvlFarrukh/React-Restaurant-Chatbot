import React, {Fragment} from "react";
import "../App";

const BotMessege = ({message, quickReplies, images, sendQuickReply}) => {
  return (
    <Fragment>
      <div className="msg left-msg">
        <div
          className="msg-img"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif)",
          }}
        />
        <div className="msg-bubble">
          <div className="msg-info">
            <div className="msg-info-name">BOT</div>
            <div className="msg-info-time">{`${new Date().getHours()}:${new Date().getSeconds()}`}</div>
          </div>

          {
            message && (
              <div className="msg-text">
                {message}
              </div>
            )
          } 
        </div>
      </div>
      {
        quickReplies && (
          <div className="msg-quickreplies">
            {
              quickReplies.map((quickReply) => <div onClick={() => {sendQuickReply(quickReply)}}>{quickReply}</div>)
            }
          </div>
        )
      }
      
      
      {/* <div>
        {
          images && (
            "images"
          )
        }
      </div> */}
    </Fragment>
  );
};

export default BotMessege;
