import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/feed/Feed";
import { auth } from "./components/firebase";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import { login, logOut, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        dispatch(
          login({
            displayName: u.displayName,
            email: u.email,
            uid: u.uid,
            photoURL: u.photoURL,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
