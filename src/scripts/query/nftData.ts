import { SixDataChainConnector, fee } from "@ddeedev/sixchain-client";
import { getConnectorConfig } from "../client";
import dotenv from "dotenv";

dotenv.config();
const default_schemaCode:string = "sixprotocol.sleeptest"

const NETWORK = process.argv[2]!;

const query = async (TOKEN_ID: number) => {
  // console.time("Minting time");
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: fee.GasPrice.fromString("1.25usix"),
  });

  // find the token has been minted or not
  const apiClient = await sixConnector.connectAPIClient();
  let token;
  let isMinted = false;
  try {
    token = await apiClient.nftmngrModule.queryNftData(default_schemaCode, TOKEN_ID.toString());
    if (token.data) {
      isMinted = true;
    }

  } catch (e:any) {
    console.log("token not found", e.error);
    token = null;
    isMinted = false;
  }

  console.log(token);

};

query(2531);