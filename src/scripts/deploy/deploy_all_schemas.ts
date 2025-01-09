import { SixDataChainConnector, ITxNFTmngr } from "@ddeedev/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate/build/fee";

import divine_elite from "../../resources/schemas/divineelite-nft-schema.json";
import preventive from "../../resources/schemas/preventive-nft-schema.json";
import membership from "../../resources/schemas/membership-nft-schema.json";
import lifestyle from "../../resources/schemas/lifestyle-nft-schema.json";
import { getConnectorConfig } from "../client";
import dotenv from "dotenv";
dotenv.config();
const NETOWRK = process.argv[2]!;

if (!NETOWRK) {
  throw new Error(
    "INPUT NETWORK BY RUNNING: bun run ./scripts/deploy.ts fivenet || yarn ts-node ./scripts/deploy.ts fivenet",
  );
}

const schemaList = [
  divine_elite,
  preventive,
  membership,
  lifestyle
];

export const Deploy = async () => {
  const sixConnector = new SixDataChainConnector();
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(NETOWRK);
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);
  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: GasPrice.fromString("1.25usix"),
  });

  let msgArray: Array<EncodeObject> = [];

  for (let i = 0; i < schemaList.length; i++) {
    let schema_name = schemaList[i].code;
    const split_schema = schema_name.split(".");
    const _name = split_schema[1];
    const org_name = process.env.ORG_NAME;
    let schemaCode: string;
    schemaCode = `${org_name}.${_name}`;
    schemaList[i].code = schemaCode;
    let encodeBase64Schema = Buffer.from(
      JSON.stringify(schemaList[i]),
    ).toString("base64");
    const msgCreateNFTSchema: ITxNFTmngr.MsgCreateNFTSchema = {
      creator: address,
      nftSchemaBase64: encodeBase64Schema,
    };

    const msg = rpcClient.nftmngrModule.msgCreateNFTSchema(msgCreateNFTSchema);

    msgArray.push(msg);
  }

  const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(msgArray, {
    fee: "auto",
  });
  if (txResponse.code != 0) {
    console.log(txResponse.rawLog);
  }
  console.log(
    `gasUsed: ${txResponse.gasUsed}\ngasWanted:${txResponse.gasWanted}\n`,
  );
  return txResponse;
};

// ask to enter confirmmation
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Are you sure you want to deploy to ${NETOWRK} (y/n)?`,
  (answer: any) => {
    if (
      answer === "y" ||
      answer === "Y" ||
      answer === "yes" ||
      answer === "Yes"
    ) {
      console.log("deploying...");
      Deploy();
    } else {
      console.log("aborting...");
      process.exit(1);
    }
    readline.close();
  },
);
