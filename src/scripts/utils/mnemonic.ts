import * as bip39 from "bip39";
import { SixDataChainConnector} from "@thesixnetwork/sixchain-client";
import crypto from "crypto";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { EnglishMnemonic } from "@cosmjs/crypto";
import { getConnectorConfig } from "../client";

export function generateCosmosMnemonic(): string {
  const mnemonic = bip39.generateMnemonic(256);
  const englishMnemonic = new EnglishMnemonic(mnemonic);
  if (!englishMnemonic) {
    throw new Error("Failed to generate a valid Cosmos mnemonic");
  }
  return mnemonic;
}

export async function addressFromMnemonic(prefix: string, mnemonic: string) {
  const hdWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: prefix,
  });

  const addressInfo = await hdWallet.getAccounts().then((res) => {
    return res;
  });

  return addressInfo;
}

export function encryptMnemonic(mnemonic: string) {
  const string_key = String(process.env.SIXNET_MNEMONIC_ENCRYPT_KEY);
  const string_iv = String(process.env.SIXNET_MNEMONIC_ENCRYPT_IV);
  const keyFromHex = Buffer.from(string_key, "hex");
  const ivFromHex = Buffer.from(string_iv, "hex");
  const algorithm = "aes-256-cbc";
  const cipher = crypto.createCipheriv(algorithm, keyFromHex, ivFromHex);
  let encrypted = cipher.update(mnemonic);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  // Store the IV with the encrypted mnemonic to use it during decryption
  return ivFromHex.toString("hex") + ":" + encrypted.toString("hex");
}

export function decryptMnemonic(encryptedMnemonic: string): string {
  const string_key = String(process.env.SIXNET_MNEMONIC_ENCRYPT_KEY);
  const string_iv = String(process.env.SIXNET_MNEMONIC_ENCRYPT_IV);
  const keyFromHex = Buffer.from(string_key, "hex");
  const algorithm = "aes-256-cbc";

  const textParts = encryptedMnemonic.split(":");
  const ivFromText = Buffer.from(textParts.shift() as string, "hex");
  const encryptedText = Buffer.from(textParts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(algorithm, keyFromHex, ivFromText);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export async function checkBalance(address: string, chain: string) {
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(chain);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;
  let balances = {};
  const apiClient = await sixConnector.connectAPIClient();
  let isQueried = false;
  // map of address and balance
  try {
    const balance = await apiClient.cosmosBankModule.queryBalance(address, {
      denom: "usix",
    });
    if (balance && balance.data) {
      isQueried = true;
      const balancAmount = balance.data.balance?.amount
        ? parseInt(balance.data.balance?.amount) / 1_000_000
        : 0;
      console.log(balancAmount);
    }
  } catch (e:any) {
    console.log("token not found", e.error);
  }
}