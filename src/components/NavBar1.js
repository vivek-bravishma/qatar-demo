import "./NavBar.css";
import userSVG from '../assets/icons/user.svg'


const NavBar = ({userName}) => {
  return (
    <header className="header">
      <b className="user">{userName}</b>
      <img className="user-icon" alt="" src={userSVG} />
    </header>
  );
};

export default NavBar;
