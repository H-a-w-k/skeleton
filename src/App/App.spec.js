import React from "react";
import App from "./App";

describe("App", () => {
  it("snapshot", () => {
    jestExpect(shallow(<App />).debug()).toMatchSnapshot();
  });

  it("should render", () => {
    expect(shallow(<App />).exists()).true;
  });
});
