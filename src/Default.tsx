import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import "./App.css";

export const Default = () => {
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
        Press for default toast
      </button>
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="ch-toast ch-toast--outline-default"
        style={{
          listStyle: "none",
        }}
      >
        <Toast.Close asChild>
          <button className=""></button>
        </Toast.Close>
        <Toast.Title className="ch-toast__text">
          Alternate toast message
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="ch-toast--viewport"></Toast.Viewport>
    </Toast.Provider>
  );
};
