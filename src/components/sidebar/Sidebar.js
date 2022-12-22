import {Add, AppBlockingOutlined, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import CreateIcon from "@mui/icons-material/Create"
import SidebarOption from "./SidebarOption";
import { InsertComment } from "@mui/icons-material";
import  BookmarkBorderIcon from "@mui/icons-material/Book"
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([])
  const [{user}] = useStateValue()

  useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id : doc.id,
        name : doc.data().name,
      })))
    })
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar_header">
          <div className="sidebar_info">
            <h2>TopDigital</h2>
            <h3>
              <FiberManualRecord />
              {user?.displayName}
            </h3>
        </div>
        <CreateIcon />
      </div>
      <div className="all_sidebar_option">
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Drafts & sent" />
      <SidebarOption Icon={BookmarkBorderIcon} title="channel Browser" />
      <SidebarOption Icon={AppBlockingOutlined} title="Apps" />
      <SidebarOption Icon={FileCopy} title="Files" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption addchannelOption={true} Icon={Add} title="Add chanel" />
      {/* connect to dB and list att the chanel */}
      {/* <SidebarOption /> */}
      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
