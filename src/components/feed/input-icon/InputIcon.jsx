import "./InputIcon.css";

function InputIcon({ Icon, title, color }) {
  return (
    <div className="InputIcon">
      <Icon style={{ color: color }} />
      <span>{title}</span>
    </div>
  );
}

export default InputIcon;
