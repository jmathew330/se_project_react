import "./Sidebar.css";
import avatar from "../../assets/avatar.svg";
function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">Jeffin Mathew</p>
    </div>
  );
}

export default Sidebar;
