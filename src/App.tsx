import { FC } from "react";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default App;
