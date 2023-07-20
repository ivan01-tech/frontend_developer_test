// import { describe, test, expect } from "vitest";
// import { render, screen,fireEvent,getByText } from "@testing-library/react";

// describe("<App />", () => {
//   test("App mounts properly", () => {
//     const wrapper = render(<App />);
//     expect(wrapper).toBeTruthy();

//     // Get by h1
//     const h1 = wrapper.container.querySelector("h1");
//     expect(h1?.textContent).toBe("Vite + React");

//     // Get by text using the React testing library
//     const text = screen.getByText(
//       /Click on the Vite and React logos to learn more/i
//     );
//     expect(text.textContent).toBeTruthy();
//   });
// });


// it("Click the button", () => {
//   const wrapper = render(<App />);
//   const button = wrapper.container.querySelector("button") as HTMLButtonElement;

//   // button mounts with count in 0
//   expect(button.textContent).toBe("count is 0");

//   fireEvent(
//     getByText(button, "count is 0"),
//     new MouseEvent("click", {
//       bubbles: true,
//     })
//   );

//   // The count hook is working
//   expect(button.textContent).toBe("count is 1");
// });
