import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="side">
      <div>
        <p className="logo">Travels</p>
      </div>
      <div className="sidebar">
        <nav>
          <NavLink to="/">
            <h1>Главная</h1>
          </NavLink>
          <NavLink to="/tours">
            <h1>Туры</h1>
          </NavLink>
          <NavLink to="/about">
            <h1>О нас</h1>
          </NavLink>
        </nav>
      </div>
    </div>

  );
}
export default Menu;
