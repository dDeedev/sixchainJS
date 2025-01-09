import { SixDataChainConnector } from "@ddeedev/sixchain-client";
import { getConnectorConfig } from "../client";
import list_all_recipient from "../utils/all_address";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const NETWORK = process.argv[2]!;
const Balance = async () => {
  // console.time("Minting time");
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETWORK);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  fs.appendFile(
    `balance.csv`,
    `address,token\n`,
    function (err) {
      if (err) throw err;
    }
  );

  let balances:any = {};
  if (fs.existsSync("balances.json")) {
    balances = JSON.parse(fs.readFileSync("balances.json").toString());
  }

  // ** MINT NFT **
  // loop through all token id
  const records = [];
  for (let i = 0; i < list_all_recipient.length; i++) {
    // find the token has been minted or not
    const apiClient = await sixConnector.connectAPIClient();
    let balance;
    let isQueried = false;
    // map of address and balance
    let token = {
      address: list_all_recipient[i],
      balance: 0
    };
    try {
      const balance = await apiClient.cosmosBankModule.queryBalance(list_all_recipient[i], {
        denom: "usix"
      });
      // if token has been minted, skip to next token
      // update to key
      if (balance.data) {
        isQueried = true;
        const balanceAmount = parseInt(balance.data?.balance.amount) / 1_000_000;
        token.balance = balanceAmount
        console.log(token);

        // Update balance for address
        if (!balances[token.address]) {
          balances[token.address] = 0;
        }
        balances[token.address] = balanceAmount;

        // Write updated balances to JSON file
        fs.writeFileSync("balances.json", JSON.stringify(balances));
      }
    } catch (e:any) {
      console.log("token not found", e.error);
    }
    records.push(token);
  }
};

// create one metadata for test on production which is token_id = 2531
Balance().then(() => {
  console.log("Done");
  process.exit(0);
}).catch((e) => {
  console.log(e);
  process.exit(1);
});