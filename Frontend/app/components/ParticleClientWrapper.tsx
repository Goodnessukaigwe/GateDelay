"use client";

import { UnconfiguredWalletRoot } from "./UnconfiguredWalletRoot";

/**
 * Default layout wallet shell.
 *
 * Always mounts Wagmi + a no-op ConnectKit bridge so first load never imports
 * `@particle-network/connectkit` (AWS → `node:fs`) into the Turbopack client
 * graph. Navbar, Connect Wallet, and route children render on first paint.
 *
 * To enable Particle ConnectKit when credentials are present, point
 * `app/layout.tsx` at `./components/ParticleClientWrapper.particle` and prefer
 * `npm run dev:webpack` over global `node:*` stubs.
 */
export function ParticleClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UnconfiguredWalletRoot>{children}</UnconfiguredWalletRoot>;
}
