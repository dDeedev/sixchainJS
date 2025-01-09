import { SixDataChainConnector } from "@ddeedev/sixchain-client";
import { OfflineSigner } from "@cosmjs/proto-signing";
import dotenv from "dotenv";

dotenv.config();

export const getSigner = async (
  sixConnector: SixDataChainConnector,
  network: string,
): Promise<OfflineSigner> => {
  switch (network) {
    case "local":
      sixConnector.rpcUrl = "http://localhost:26657";
      return await sixConnector.accounts.mnemonicKeyToAccount(
        process.env.ALICE_MNEMONIC!,
      );
    case "fivenet":
      sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
      return await sixConnector.accounts.mnemonicKeyToAccount(
        process.env.FIVENET_MNEMONIC!,
      );
    case "sixnet":
      sixConnector.rpcUrl = "https://sixnet-rpc.sixprotocol.net:443";
      return await sixConnector.accounts.mnemonicKeyToAccount(
        process.env.SIXNET_MNEMONIC!,
      );
    default:
      throw new Error("Invalid network");
  }
};

export async function getConnectorConfig(
  network: string,
): Promise<{ rpcUrl: string; apiUrl: string; mnemonic: string }> {
  switch (network) {
    case "local":
      return {
        rpcUrl: "http://localhost:26657",
        apiUrl: "http://localhost:1317",
        mnemonic: process.env.ALICE_MNEMONIC!,
      };
    case "fivenet":
      return {
        rpcUrl: "https://rpc1.fivenet.sixprotocol.net:443",
        apiUrl: "https://api1.fivenet.sixprotocol.net:443",
        mnemonic: process.env.FIVENET_MNEMONIC!,
      };
    case "sixnet":
      return {
        rpcUrl: "https://sixnet-rpc.sixprotocol.net:443",
        apiUrl: "https://sixnet-api.sixprotocol.net:443",
        mnemonic: process.env.SIXNET_MNEMONIC!,
      };
    default:
      throw new Error("Invalid network");
  }
}

export async function getConnection(network:string) {
  switch (network) {
    case "local":
      return {
        rpcUrl: "http://localhost:26657",
        apiUrl: "http://localhost:1317",
      };
    case "fivenet":
      return {
        rpcUrl: "https://rpc1.fivenet.sixprotocol.net:443",
        apiUrl: "https://api1.fivenet.sixprotocol.net:443",
      };
    case "sixnet":
      return {
        rpcUrl: "https://sixnet-rpc.sixprotocol.net:443",
        apiUrl: "https://sixnet-api.sixprotocol.net:443",
      };
    default:
      throw new Error("Invalid network");
  }
}

