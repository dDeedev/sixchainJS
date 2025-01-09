import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import NFTSchema from "../../../resources/schemas/membership-nft-schema.json";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { getConnectorConfig } from "../../client";
dotenv.config();

const main = async () => {
  const network = process.argv[2];
  const TOKENID = process.argv[3];

  if (!network) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet).",
    );
  }
  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(network); const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner = await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);


  const address = (await accountSigner.getAccounts())[0].address;
  const rpcClient = await sixConnector.connectRPCClient(accountSigner, {
    gasPrice: GasPrice.fromString("1.25usix"),
  });

  let schema_name = NFTSchema.code;
  const split_schema = schema_name.split(".");
  const _name = split_schema[1];
  const org_name = process.env.ORG_NAME;
  let schemaCode: string;
  schemaCode = `${org_name}.${_name}`;

  const ref_id = uuidv4();
  const action: ITxNFTmngr.MsgPerformActionByAdmin = {
    creator: address,
    nft_schema_code: schemaCode,
    tokenId: TOKENID,
    action: "transfer_service",
    ref_id,
    parameters: [
      { name: "service_name", value: "service_1" },
      { name: "amount", value: "1" },
      { name: "token_id", value: "1" },
    ],
  };

  const msgArray: EncodeObject[] = [
    rpcClient.nftmngrModule.msgPerformActionByAdmin(action),
  ];

  try {
    const txResponse = await rpcClient.nftmngrModule.signAndBroadcast(
      msgArray,
      {
        fee: "auto",
        memo: ref_id,
      },
    );
    console.log(txResponse);
  } catch (err) {
    console.error("Transaction failed:", err);
  }
};

main().catch((err) => {
  console.error("Error in main execution:", err);
});
