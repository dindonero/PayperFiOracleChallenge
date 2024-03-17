// pages/api/executeAleoProgram.js
import { Account, AleoNetworkClient, NetworkRecordProvider, ProgramManager, AleoKeyProvider } from '@aleohq/sdk';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  try {
    // Assuming the private key is stored in .env.local
    const privateKey = process.env.ALEO_PRIVATE_KEY;
    if (!privateKey) {
      return res.status(500).json({ error: 'Server error: Missing Aleo private key.' });
    }

    // Initialize your account with the private key
    const account = new Account(privateKey);

    const price = "10000"
    const oracle_id = "1field"

    // Setup key and record providers
    const keyProvider = new AleoKeyProvider();

    const networkClient = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
    const recordProvider = new NetworkRecordProvider(account, networkClient);

    // Initialize a program manager
    const programManager = new ProgramManager("https://api.explorer.aleo.org/v1", keyProvider, recordProvider);

    // Execute the program
    const programName = "oracle_challenge.aleo";
    const txId = await programManager.execute(programName, "updatePriceFeed", oracle_id, `{ price: ${price}, decimals: 8, timestamp: ${Date.now()}`);
    const transaction = await programManager.networkClient.getTransaction(txId);

    // Return the transaction details
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error executing Aleo program:", error);
    res.status(500).json({ error: "Failed to execute Aleo program." });
  }
}
