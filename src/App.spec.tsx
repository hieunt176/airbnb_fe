import React from "react";

import { render, screen } from "@testing-library/react";

it("renders 'Hello World'", () => {
  render(<div>Hello World</div>);
  const myElement = screen.getByText(/Hello World/);

  expect(myElement).toBeInTheDocument()
});
