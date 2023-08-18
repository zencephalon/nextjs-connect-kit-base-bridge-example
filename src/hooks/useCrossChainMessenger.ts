import { CrossChainMessenger } from "@eth-optimism/sdk";
import { useWalletClient } from "wagmi";
import { useEthersSigner } from "../utils/ethers";
import React from "react";

const l1id = 5;
const l2id = 84531;

export function useCrossChainMessenger() {
  const l1Signer = useEthersSigner({ chainId: l1id });
  const l2Signer = useEthersSigner({ chainId: l2id });

  return React.useMemo(() => {
    if (!l1Signer) {
      return undefined;
    }
    if (!l2Signer) {
      return undefined;
    }

    return new CrossChainMessenger({
      l1ChainId: l1id, // Goerli value, 1 for mainnet
      l2ChainId: l2id, // Goerli value, 8453 for mainnet
      l1SignerOrProvider: l1Signer,
      l2SignerOrProvider: l2Signer,
    });
  }, [l1Signer, l2Signer]);
}
