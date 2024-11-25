import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import MyRfqs from "./Pages/MyRfqs";
import MyOrders from "./Pages/MyOrders";
import MyOppurtunities from "./Pages/MyOppurtunities";
import CreateRfq from "./Pages/CreateRfq";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          children: [
            { path: "", element: <MyRfqs /> },
            { path: "create-rfq", element: <CreateRfq /> },
          ],
        },

        {
          path: "orders",
          element: <MyOrders />,
        },
        {
          path: "opportunities",
          element: <MyOppurtunities />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
