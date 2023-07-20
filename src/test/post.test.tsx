import { render } from "@testing-library/react";
import Post from "../components/Post";
import { MemoryRouter } from "react-router-dom";

describe("Post unique test suite !", function () {
  test("render Post correctly", function () {
    // const
    const wrapper = render(
      <MemoryRouter>
        <Post
          post={{
            title: "hello",
            id: 1,
            body: "bonjour les gens",
            userId: 4,
          }}
        />
      </MemoryRouter>
    );

    const aHref = wrapper.container.querySelector("a");
    const aHref1 = wrapper.container.querySelector("a[href|='/posts/1'");
    const p = wrapper.container.querySelector("p");

    expect(aHref).toHaveTextContent("view the post");
    expect(aHref1).toBeInTheDocument();

    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent("bonjour les gens...");
  });
});
