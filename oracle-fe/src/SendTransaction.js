import {
  Transaction,
  WalletAdapterNetwork,
  WalletNotConnectedError,
} from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import React, { FC, useCallback } from "react";

export const RequestTransaction = () => {
  const { publicKey, requestTransaction } = useWallet();
  const [oracleId, setOracleId] = useState(0);
  const [price, setPrice] = useState(0);

  const onClick = async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    // The record here is an output from the Requesting Records above      // Note that the inputs must be formatted in the same order as the Aleo program function expects, otherwise it will fail
    const inputs = [
      oracleId,
      `{ price: ${price}, decimals: 8, timestamp: 1634025600 }`,
    ];
    const fee = 35_000; // This will fail if fee is not set high enough

    const aleoTransaction = Transaction.createTransaction(
      publicKey,
      WalletAdapterNetwork.Testnet,
      "oracle_challenge.aleo",
      "updatePriceFeed",
      inputs,
      fee
    );

    if (requestTransaction) {
      // Returns a transaction Id, that can be used to check the status. Note this is not the on-chain transaction id
      await requestTransaction(aleoTransaction);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />
      <input
        type="number"
        value={secondInput}
        onChange={(e) => setSecondInput(Number(e.target.value))}
        placeholder="Enter second input"
      />
      <button onClick={onClick} disabled={!publicKey}>
        Submit new price
      </button>
    </div>
  );
};
