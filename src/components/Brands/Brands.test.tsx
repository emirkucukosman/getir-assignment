import "whatwg-fetch";
import { render, screen, userEvent, waitFor } from "test-utils";
import { describe, expect, it } from "vitest";

import { Brands } from "./Brands";

describe("Brands", () => {
  it("should render correct number of companies", async () => {
    render(<Brands />);

    await waitFor(() => screen.getAllByRole("checkbox"));

    expect(screen.getAllByRole("checkbox")).toHaveLength(44);
  });

  it("should display search results correctly", async () => {
    render(<Brands />);

    await userEvent.type(screen.getByRole("textbox"), "Bayer");
    expect(screen.getByText("Bayer and Sons")).toBeInTheDocument();

    await userEvent.type(screen.getByRole("textbox"), "asdsadsada");
    expect(screen.queryByRole("contentinfo")).not.toBeInTheDocument();
  });
});
