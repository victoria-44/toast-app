import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import "./App.css";

export const Warning = () => {
  const [open, setOpen] = React.useState(false);

  const buttonClick = () => {
    setOpen(true);
  };

  return (
    <Toast.Provider>
      <button
        type="button"
        className="ch-btn ch-btn--primary ch-ma--1"
        onClick={buttonClick}
      >
        Send SMS
      </button>
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="ch-toast ch-toast--warning"
        style={{
          listStyle: "none",
        }}
      >
        <span className="ch-toast--warning-icon" />

        <Toast.Close asChild>
          <button className="ch-toast--close-orange"></button>
        </Toast.Close>
        <Toast.Title className="ch-toast__text">
          Alternate toast message
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="ch-toast--viewport"></Toast.Viewport>
    </Toast.Provider>
  );
};
