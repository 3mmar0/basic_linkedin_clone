import {
  CalendarViewMonthSharp,
  CreateOutlined,
  EventNoteRounded,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import db from "../firebase";
import firebase from "firebase/compat/app";
import "./Feed.css";
import InputIcon from "./input-icon/InputIcon";
import Post from "./posts/Post";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const sending = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      desc: user.email,
      mess: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setPosts(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__inputs">
        <div className="feed__input">
          <CreateOutlined />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter anything"
            />
            <button disabled={!input} onClick={sending} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputIcons">
          <InputIcon Icon={Image} title="Photo" color="#70b5f9" />
          <InputIcon Icon={Subscriptions} title="Video" color="green" />
          <InputIcon Icon={EventNoteRounded} title="Event" color="gold" />
          <InputIcon
            Icon={CalendarViewMonthSharp}
            title="Article"
            color="pink"
          />
        </div>
      </div>
      {posts.map((e) => (
        <Post
          key={e.id}
          photo={e.data.photoURL}
          name={e.data.name}
          desc={e.data.desc}
          mess={e.data.mess}
        />
      ))}
    </div>
  );
}

export default Feed;
