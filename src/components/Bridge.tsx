"use client";

import { useCrossChainMessenger } from "../hooks/useCrossChainMessenger";

const gwei = 1e9;

export function Bridge() {
  const crossChainMessenger = useCrossChainMessenger();
  return (
    <button
      onClick={async () => {
        const response = await crossChainMessenger?.depositETH(1000 * gwei);
        console.log(`Transaction hash (on L1): ${response?.hash}`);
      }}
    >
      Bridge!!!!
    </button>
  );
}
