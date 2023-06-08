import { Link, createBrowserRouter } from "react-router-dom";
import { PushNotification, Pusher, PwaText } from "../../pwa";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/pn">
            <button
              style={{
                padding: "13px 15px",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              PushNotification
            </button>
          </Link>
          <Link to="/p">
            <button
              style={{
                padding: "13px 15px",
                cursor: "pointer",
                margin: "10px",
              }}
            >
              Pusher
            </button>
          </Link>
        </div>
      </div>
    ),
  },
  {
    path: "/pn",
    element: <PushNotification />,
  },
  {
    path: "/p",
    element: <Pusher />,
  },
  {
    path: "/pwa",
    element: <PwaText />,
  },
]);


// all route