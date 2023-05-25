import React from "react";
import pushNot from "react-push-notification";
import logo from "../images/114070063.jpg";
import { Link } from "react-router-dom";

const PushNotification = () => {
  const notification = () => {
    pushNot({
      title: "greetings",
      message: "wassup bro",
      vibrate: true,
      duration: 1000,
      theme: "red",
      native: true,
      icon: `${logo}`,
    });
  }; // push notification

  function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
  } // allow access(push notification)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        width: "100%",
      }}
    >
      <button onClick={notification} style={{ color: "red" }}>
        click
      </button>
      <button onClick={requestNotificationPermission}>notifcations</button>

      <Link
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
        }}
        to={-1}
      >
        <button>go back</button>
      </Link>
    </div>
  );
};

export default PushNotification;
