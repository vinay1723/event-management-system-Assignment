import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

import Allevents, { loader as eventLoader } from "./pages/Allevents";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/events",
        element: <Allevents />,
        loader: eventLoader,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
