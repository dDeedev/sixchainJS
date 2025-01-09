import { SixDataChainConnector, ITxNFTmngr, fee } from "@thesixnetwork/sixchain-client";
import { EncodeObject } from "@cosmjs/proto-signing";
import NFTSchema from "../../../resources/schemas/preventive-nft-schema.json";
import { GasPrice } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { getConnectorConfig } from "../../client";
dotenv.config();

const TOKEN_ID = process.argv[3]!;
const SENIOR = process.argv[4]!;
const senior = Boolean(SENIOR);

const main = async () => {
  const network = process.argv[2];

  if (!network) {
    throw new Error(
      "Network not specified. Please provide a network as an argument (local, fivenet, sixnet).",
    );
  }

  const { rpcUrl, apiUrl, mnemonic } = await getConnectorConfig(network);
  const sixConnector = new SixDataChainConnector();
  sixConnector.rpcUrl = rpcUrl;
  sixConnector.apiUrl = apiUrl;

  const accountSigner =
    await sixConnector.accounts.mnemonicKeyToAccount(mnemonic);
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

  let action: ITxNFTmngr.MsgPerformActionByAdmin;

  if (senior) {
    const action40p: ITxNFTmngr.MsgPerformActionByAdmin = {
      creator: address,
      nft_schema_code: schemaCode,
      tokenId: TOKEN_ID,
      action: "extend_privilege",
      ref_id,
      parameters: [
        { name: "tier", value: "5" },
        { name: "group_one", value: "5" },
        { name: "group_two", value: "0" },
        { name: "group_three", value: "0" },
      ],
    };

    action = action40p;
  } else {
    const action40l: ITxNFTmngr.MsgPerformActionByAdmin = {
      creator: address,
      nft_schema_code: schemaCode,
      tokenId: TOKEN_ID,
      action: "extend_privilege",
      ref_id,
      parameters: [
        { name: "tier", value: "5" },
        { name: "group_one", value: "0" },
        { name: "group_two", value: "5" },
        { name: "group_three", value: "0" },
      ],
    };
    action = action40l;
  }

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
