import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import "./App.css";

export const Success = () => {
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
        Press for success!
      </button>
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="ch-toast ch-toast--top ch-toast--success"
        style={{
          listStyle: "none",
        }}
      >
        <span className="ch-toast--icon-success" />
        <Toast.Title className="ch-toast--text">
          Alternate toast message
        </Toast.Title>
        <Toast.Close asChild>
          <button className="ch-toast--close-green"></button>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="ch-toast--viewport-right"></Toast.Viewport>
    </Toast.Provider>
  );
};
