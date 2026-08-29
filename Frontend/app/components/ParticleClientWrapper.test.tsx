import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ParticleClientWrapper } from "./ParticleClientWrapper";

describe("ParticleClientWrapper", () => {
  it("renders navbar and wallet chrome on first paint instead of a blank screen", () => {
    render(
      <ParticleClientWrapper>
        <nav>Markets</nav>
        <button type="button">Connect Wallet</button>
      </ParticleClientWrapper>,
    );

    expect(screen.getByText("Markets")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Connect Wallet" })).toBeInTheDocument();
    expect(screen.queryByTestId("wallet-provider-error")).not.toBeInTheDocument();
  });

  it("keeps the app shell visible while the default wallet root mounts", () => {
    render(
      <ParticleClientWrapper>
        <span>shell</span>
      </ParticleClientWrapper>,
    );

    expect(screen.getByText("shell")).toBeInTheDocument();
  });
});
