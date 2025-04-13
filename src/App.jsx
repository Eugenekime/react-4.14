import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Suspense, lazy } from "react";

// styles
import "./assets/styles.css";

// context
import ContextProvider from "./ContextProvider/ContextProvider";

// pages
import RootLayout from "./layouts/RootLayout";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import EditProfile from "./components/EditProfile";
const Blog = lazy(() => import("./components/Blog"));
const Articles = lazy(() => import("./components/Articles"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/articles" replace />} />
      <Route
        path="articles"
        element={
          <Suspense fallback={<div className="loader" />}>
            <Articles />
          </Suspense>
        }
      />
      <Route path="articles/:slug" element={<Blog />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="profile" element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
