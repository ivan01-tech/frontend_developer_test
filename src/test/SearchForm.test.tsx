import { expect, test, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

test("render </SearchForm />", () => {
  render(<SearchForm search="" onChange={() => null} />);

  const input = screen.getByPlaceholderText<HTMLInputElement>(
    "Search a post here..."
  );
  expect(input).toBeInTheDocument();
});

it("change event on the input", () => {
  const onChange = vi
    .fn()
    .mockImplementation(() => console.log("onchage called !"));

  const wrapper = render(<SearchForm search="lorem" onChange={onChange} />);

  const input = wrapper.container.querySelector("input") as HTMLInputElement;

  // input mounts with placeholder
  expect(input.placeholder).toBe("Search a post here...");
  // change the value of the input to ensure that onchage is called
  fireEvent.change(input, { target: { value: "aunt" } });

  expect(onChange).toHaveBeenCalled();
});
