import type { ActionDispatch } from "react";

export default function CountButton({
  countDispatch,
}: {
  countDispatch: ActionDispatch<[action: { type: string }]>;
}) {
  return (
    <>
      <button onClick={() => countDispatch({ type: "Increment" })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "Decrement" })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: "Reset" })}>reset</button>
    </>
  );
}
