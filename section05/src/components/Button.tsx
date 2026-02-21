import type React from "react";

export default function Button({
  message,
  children,
  handleClick,
}: {
  message: string;
  children: React.ReactNode;
  handleClick: (message: string) => void;
}) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
