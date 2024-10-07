import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu";
function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}
export default Layout;
