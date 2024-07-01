import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}

export default SharedLayout;