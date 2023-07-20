import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("render the home page...", () => {
  test("App mounts properly", () => {
    const wrapper = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();

    const h2 = wrapper.container.querySelector("h2");
    expect(h2?.textContent).toBe("List of Posts");

    const btn = screen.getByText(/Previous Posts/i);
    expect(btn).toBeInTheDocument();

    const btn1 = screen.getByText(/Next Posts/i);
    expect(btn1).toBeInTheDocument();
  });

  test("post are loaded properly : ", () => {});
});

/* it("Click the button", () => {
  const wrapper = render(<App />);
  const button = wrapper.container.querySelector("button") as HTMLButtonElement;

  // button mounts with count in 0
  expect(button.textContent).toBe("count is 0");

  fireEvent(
    getByText(button, "count is 0"),
    new MouseEvent("click", {
      bubbles: true,
    })
  );

  // The count hook is working
  expect(button.textContent).toBe("count is 1");
}); */
