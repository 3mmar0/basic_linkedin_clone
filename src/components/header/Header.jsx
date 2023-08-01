import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/userSlice";
import { auth } from "../firebase";
import HeaderIcons from "./h-icons/HeaderIcons";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__right">
        <img
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__left">
        <HeaderIcons Icon={Home} title="home" />
        <HeaderIcons Icon={SupervisorAccount} title="Network" />
        <HeaderIcons Icon={BusinessCenter} title="Jobs" />
        <HeaderIcons Icon={Chat} title="Messaging" />
        <HeaderIcons Icon={Notifications} title="Notifications" />
        <HeaderIcons avatar={Avatar} title="me" onClick={logout} />
      </div>
    </div>
  );
}

export default Header;
