import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./App.css";

import SingleCar from "./pages/SingleCar";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/cars/:id", Component: SingleCar },
    ],
  },
]);
function Layout() {
  return (
    <main className="bg-stone-800 p-6 h-screen flex flex-col items-center justify-center  text-stone-300">
      <Outlet />
    </main>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
