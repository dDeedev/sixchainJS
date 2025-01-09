import { SixDataChainConnector } from "@thesixnetwork/sixchain-client";
import dotenv from "dotenv";

dotenv.config();

const Balance = async () => {
  // console.time("Minting time");
  const sixConnector = new SixDataChainConnector();
  let accountSigner;
  const network = process.argv[2];

  if (network === "local") {
    // ** LOCAL TESTNET **
    sixConnector.rpcUrl = "http://localhost:26657";
    sixConnector.apiUrl = "http://localhost:1317";
  } else if (network === "fivenet") {
    // ** FIVENET **
    sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
    sixConnector.apiUrl = "https://api1.fivenet.sixprotocol.net:443";
  } else if (network === "sixnet") {
    // ** SIXNET **
    sixConnector.rpcUrl = "https://sixnet-rpc.sixprotocol.net:443";
    sixConnector.apiUrl = "https://sixnet-api.sixprotocol.net:443";
  } else {
    throw new Error("Invalid network");
  }
  const apiClient = await sixConnector.connectAPIClient();
  const totalBalance = await apiClient.cosmosBankModule.queryTotalSupply()
  console.log(totalBalance.data);

};

// create one metadata for test on production which is token_id = 2531
Balance().then(() => {
  console.log("Done");
  process.exit(0);
}).catch((e) => {
  console.log(e);
  process.exit(1);
});