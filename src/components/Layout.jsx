// src/components/Layout.jsx
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <main >
        <Outlet />
      </main>
    </div>
  );
}
