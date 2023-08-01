import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import "./HeaderIcons.css";

function HeaderIcons({ Icon, title, onClick, avatar }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerIcons">
      {Icon && <Icon className="icon" />}
      {avatar && (
        <Avatar className="icon" src={user?.photoURL}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h6>{title}</h6>
    </div>
  );
}

export default HeaderIcons;
