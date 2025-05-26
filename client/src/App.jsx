import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./ui/Loader";
import Account from "./pages/Account";
import ProtectPage from "./pages/ProtectPage";
import { FetchCurrentUser } from "./hooks/FetchCurrentUser";

const Overview = lazy(() => import("./pages/Overview"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Tour = lazy(() => import("./pages/Tour"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Overview />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/tour/:id",
    element: <Tour />,
  },
  {
    path: "/account",
    element: (
      <ProtectPage>
        <Account />
      </ProtectPage>
    ),
  },
  {
    path: "*",
    element: <Pagenotfound />,
  },
]);
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <FetchCurrentUser />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
