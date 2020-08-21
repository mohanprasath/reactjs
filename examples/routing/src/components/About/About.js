import React from "react";

export default function About({ text = "About Page" }) {
  return (
    <div data-testid="textData">
      {text}
    </div>
  );
}
