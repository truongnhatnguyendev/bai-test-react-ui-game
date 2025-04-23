import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { GameRouter } from "./pages/Game/router";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "games",
        children: GameRouter,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
