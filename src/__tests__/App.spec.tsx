import React from "react";
import { render, wait } from "@testing-library/react";

import App from "../App";
import MockAdapter from "axios-mock-adapter";
import api from "../services/api";

const apiMocker = new MockAdapter(api);

describe("App page", () => {
  it("should render 10 character components", async () => {
    apiMocker.onGet("api/people/").reply(200, {
      results: [
        { name: "luke1", eye_color: "blue" },
        { name: "luke2", eye_color: "red" },
        { name: "luke3", eye_color: "blue" },
        { name: "luke4", eye_color: "red" },
        { name: "luke5", eye_color: "blue" },
        { name: "luke6", eye_color: "red" },
        { name: "luke7", eye_color: "blue" },
        { name: "luke8", eye_color: "red" },
        { name: "luke9", eye_color: "blue" },
        { name: "luke10", eye_color: "red" }
      ]
    });

    const { getByTestId } = render(<App />);

    const techList = getByTestId("personagem");

    await wait(() => {
      expect(techList.children.length).toBe(10);
    });
  });

  it("should not render 10 character components", async () => {
    apiMocker.onGet("api/people/").reply(200, {
      results: [
        { name: "luke1", eye_color: "blue" },
        { name: "luke2", eye_color: "red" },
        { name: "luke3", eye_color: "blue" },
        { name: "luke4", eye_color: "red" }
      ]
    });

    const { getByTestId } = render(<App />);

    const techList = getByTestId("personagem");

    await wait(() => {
      expect(techList.children.length).not.toBe(10);
    });
  });
});
