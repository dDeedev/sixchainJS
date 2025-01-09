import { SixDataChainConnector, typesTxNFTManager, fee } from "@ddeedev/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate/build/fee";
import dotenv from "dotenv";
// import list_recipient  from "./list_address"
// import list_recipient_71_250 from "./list_address_71-250";
const list_recipient_71_250:Array<string> = []
dotenv.config();

const schemaCode = "TechSauce.GlobalSummit2023";

const addSystemActioner = async (start: number, end: number) => {
  const sixConnector = new SixDataChainConnector();
  let accountSigner;
  const network = process.argv[2];

  if (network === "local") {
    // ** LOCAL TESTNET **
    sixConnector.rpcUrl = "http://localhost:26657";
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.ALICE_MNEMONIC!
    );
  } else if (network === "fivenet") {
    // ** FIVENET **
    sixConnector.rpcUrl = "https://rpc1.fivenet.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.ADDRESS_KLANG_MNEMONIC
    );
  } else if (network === "sixnet") {
    // ** SIXNET **
    sixConnector.rpcUrl = "https://sixnet-rpc.sixprotocol.net:443";
    // const accountSigner = await sixConnector.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
    accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(
      process.env.TECHSAUCE_MNEMONIC
    );
  } else {
    throw new Error("Invalid network");
  }

  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: GasPrice.fromString("1.25usix"),
  });

  let msgArray: Array<EncodeObject> = [];

  // loop trough all addresses of list_recipient according to start and end
  for (let i = start; i < end; i++) {
    const addSystemAction: typesTxNFTManager.MsgDeleteActionExecutor = {
      creator: address,
      nftSchemaCode: schemaCode,
      executorAddress: list_recipient_71_250[i],
    };

    const msg = await rpcClient.nftmngrModule.msgDeleteActionExecutor(
      addSystemAction
    );
    msgArray.push(msg);
  }

  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
    fee: "auto",
    memo: "add System To TechSauce.GlobalSummit2023Mockingv9",
  });
  console.log(txResponse);
};


const multiAddSystemActioner = async () => {
  let sentCount = 0;
  const numberPerRound = 50;
  const actionNumber = list_recipient_71_250.length - sentCount;
  const round = Math.floor(actionNumber / numberPerRound);
  const remain = actionNumber % numberPerRound;

  for (let i = 0; i < round; i++) {
    await addSystemActioner(sentCount, sentCount + numberPerRound);
    await new Promise((r) => setTimeout(r, 300));
    sentCount += numberPerRound;
  }

  if (remain > 0) {
    await addSystemActioner(sentCount, sentCount + remain);
  }
};


// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to add System actioner ${schemaCode} to ${process.argv[2]} (y/n)?`,
  (answer:any) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("Adding System actioner...");
      multiAddSystemActioner()
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("aborting...");
      process.exit(1);
    }
    readline.close();
  }
);

