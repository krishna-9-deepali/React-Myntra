import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import "./index.css";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import Details from "./components/Details.jsx";
import myntraStore from "./store/index.js";
import FirstHome from "./components/FirstHome.jsx";
import DisplayItemsBycat from "./components/DisplayItemsBycat.jsx";
import BagRoute from "./routes/BagRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FirstHome />,
        /*loader: postLoader*/
      },
      // {
      //   path: "/:ids",
      //   element: <Home />,
      //   /*loader: postLoader*/
      // },
      {
        path: "/:itemId",
        element: <DisplayItemsBycat />,
      },
      {
        path: "/:id/:itemId",
        element: <Details />,
      },
    ],
  },
  // {
  //   path: "/bag",
  //   element: <Bag />,
  //   /*action: createPostAction,*/
  // },
  {
    path: "/bag",
    element: <BagRoute />,
    /*action: createPostAction,*/
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
