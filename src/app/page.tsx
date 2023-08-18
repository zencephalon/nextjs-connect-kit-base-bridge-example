import { Account } from "../components/Account";
import { Balance } from "../components/Balance";
import { BlockNumber } from "../components/BlockNumber";
import { Bridge } from "../components/Bridge";
import { ConnectKitButton } from "../components/ConnectKitButton";
import { Connected } from "../components/Connected";
import { NetworkSwitcher } from "../components/NetworkSwitcher";

export function Page() {
  return (
    <>
      <h1>wagmi + ConnectKit + Next.js</h1>

      <ConnectKitButton />

      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Bridge</h2>
        <Bridge />

        <h2>Block Number</h2>
        <BlockNumber />
      </Connected>
    </>
  );
}

export default Page;
