import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./chat.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from "../../firebase";
import Message from "../message/Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails({id : snapshot.id,name :snapshot.data().name});
        });
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messeges")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>{
        setRoomMessages(snapshot?.docs?.map((doc) => doc.data()))
      });
  }, [roomId]);
  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {
            roomMessages?.map(message => (
                <Message
                text={message.messege}
                timestamp={message.timestamp}
                name={message.username}
                imgUrl={message.userimage}
                />
            ))
        }
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id} />
    </div>
  );
}

export default Chat;
