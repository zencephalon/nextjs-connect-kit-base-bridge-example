import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { mainnet, optimism, base, goerli, baseGoerli } from "wagmi/chains";

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

const chains = [mainnet, optimism, base, goerli, baseGoerli];

export const config = createConfig(
  getDefaultConfig({
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    autoConnect: true,
    appName: "My wagmi + ConnectKit App",
    walletConnectProjectId,
    chains,
  })
);
